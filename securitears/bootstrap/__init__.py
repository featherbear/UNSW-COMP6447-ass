# Bootstraps are format wrappers over the executable binaries.  
# They provide the abstraction layer for interaction

##############################################################

from ..util import strResolveFile

"""
Select bootstrap with highest score
"""
def detectFormat(filePath, inputFile=None):
    strResolveFile(filePath)    
    
    data = strResolveFile(inputFile, openFile=True)
    inputData = data.read() if data else None
    
    results = [(bootstrap, bootstrap.detect(filePath, inputData=inputData)) for bootstrap in __modules.values()]
    return sorted(results, key=lambda p: p[1])[-1][0]




"""
Bootstrap base class.  
Inherit this class to create a new bootstrap
"""
import os.path
from ..Harness import Harness
from .. import state
import enlighten

class BaseBootstrap: 
    from .. import strategy

    def __init__(self, filePath, *, inputFile=None):
        self.filePath = strResolveFile(filePath)
        self.harness = Harness(filePath)

        inputFile = strResolveFile(inputFile, openFile = True)
        self.inputData = inputFile.read() if inputFile else None
    
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

    @classmethod
    def getStrategies(cls):
        return cls.strategy["common"]

    def fuzz(self, *, limit=None, wait=False, strategyName=None):
        if type(limit) is int and limit <= 0:
            limit = None

        strategy = self.getStrategies()
        if strategyName is not None:
            if strategyName not in strategy:
                print(f"Error: No strategy named `{strategyName}`")
                return None
            strategy = {strategyName: strategy[strategyName]}
        
        active = dict()
        for strat, factory in strategy.items():
            generator = factory(self.inputData)
            if generator is not None:
                active[strat] = generator

        manager = enlighten.get_manager(enabled=state.get("verbose", False))
        manager.status_bar(status_format=u'Fuzzing: ' + os.path.basename(self.filePath) + '{fill}' + str(self) +'{fill}{elapsed}',
                           color='bold_underline_bright_white_on_lightslategray',
                           justify=enlighten.Justify.CENTER, autorefresh=True, min_delta=0.5
                          )
        counters = dict((k, manager.counter(total=limit, desc=k, unit='iterations', color='grey')) for k in active.keys())

        waitResult = None

        while len(active) > 0:
            for strat in [*active.keys()]:
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
                    if wait:
                        del active[strat]
                        counters[strat].close()
                        if waitResult is None:
                            waitResult = data
                    else:
                        for c in active.keys(): counters[c].close()
                        manager.stop()
                        return data

        for c in counters.values():
            if c.enabled:
                c.close()
        manager.stop()
        
        return waitResult
    
    @staticmethod
    def detect(filename, inputData=None):
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