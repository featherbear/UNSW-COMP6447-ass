# Bootstraps are format wrappers over the executable binaries.  
# They provide the abstraction layer for interaction

##############################################################

"""
Select bootstrap with highest score
"""
def detectFormat(filePath):
    if not os.path.isfile(filePath):
        raise FileNotFoundError(f"{filePath} does not exist")
    results = [(bootstrap, bootstrap.detect(filePath)) for bootstrap in __modules.values()]
    return sorted(results, key=lambda p: p[1])[-1][0]




"""
Bootstrap base class.  
Inherit this class to create a new bootstrap
"""
import os.path
from ..Harness import Harness
from .. import csv_strategy, json_strategy, plaintext_strategy, xml_strategy, state
import enlighten
from ..strategy import Strategy

class BaseBootstrap: 
    def __init__(self, filePath, *, inputFile=None):
        if not os.path.isfile(filePath):
            raise FileNotFoundError(f"{filePath} does not exist")

        if type(inputFile) is str:
            if not os.path.isfile(inputFile):
                raise FileNotFoundError(f"{inputFile} does not exist")           
            inputFile = open(inputFile)

        self.filePath = filePath
        self.inputData = inputFile.read() if inputFile else None
        self.harness = Harness(filePath)
    
    def __repr__(self):
        return f"Bootstrap :: {self.filePath}"

    def __enter__(self): 
        return self
      
    def __exit__(self, *_): 
        pass

    def test(self, data):
        raise NotImplementedError()
        self.testRaw(data)

    def testRaw(self, data):
        return self.harness.test(data)

    def parse(self):
        raise NotImplementedError()
        
    def fuzz(self, *, limit=None):
        if type(limit) is int and limit <= 0:
            limit = None

        strategy = os.path.basename(self.filePath)[:-1]+"_strategy"

        # strategy = importlib.import_module(os.path.basename(self.filePath)[:-1]+"_strategy")


        active = dict((p[0], p[1](self.inputData)) for p in strategy.items())
        strategyObj = Strategy(strategy, active)

        manager = enlighten.get_manager(enabled=state.get("verbose", False))
        manager.status_bar(status_format=u'Fuzzing: ' + os.path.basename(self.filePath) + '{fill}{elapsed}',
                           color='bold_underline_bright_white_on_lightslategray',
                           justify=enlighten.Justify.CENTER, autorefresh=True, min_delta=0.5
                          )
        counters = dict((p[0], manager.counter(total=limit, desc=p[0], unit='iterations', color='grey')) for p in strategy.items())

        while len(active) > 0:
            for strat in [*strategyObj.get_modules().keys()]:
                try:
                    data = next(active[strat])
                    if counters[strat].count == limit:
                        counters[strat].color = "bright_black"
                        raise StopIteration
                except StopIteration:
                    del active[strat]
                    counters[strat].total = counters[strat].count
                    counters[strat].close()
                    continue
                
                counters[strat].update()

                if self.testRaw(data):
                    counters[strat].color = "green"
                    counters[strat].total = counters[strat].count
                    counters[strat].close()
                    for c in counters.values(): c.close()
                    manager.stop()
                    return data

        for c in counters.values(): c.close()
        manager.stop()
        
        return None
    
    @staticmethod
    def detect(filename):
        # raise NotImplementedError()
        return 0

  
"""
Dynamically load the bootstrap module
"""
def __init__():
    import importlib
    import pkgutil

    for _, fp, _ in pkgutil.walk_packages(path=pkgutil.extend_path(__path__, __name__), prefix=__name__ + '.'):
        pyfile = fp[len(__name__) + 1:]
        try:
            __modules[pyfile] = importlib.import_module(fp).Bootstrap
        except Exception as e:
            print("Error routing " + pyfile + " - " + str(e))
    return __modules

__modules = {}
__init__()