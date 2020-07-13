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
import os
from ..Harness import Harness
from .. import strategy

class BaseBootstrap: 
    def __init__(self, filePath, *, inputData=None):
        if not os.path.isfile(filePath):
            raise FileNotFoundError(f"{filePath} does not exist")
        if inputData is not None and not os.path.isfile(inputData):
            raise FileNotFoundError(f"{inputData} does not exist")

        self.filePath = filePath
        self.inputData = inputData
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
        
    def fuzz(self, *, limit=500):
        #                         TODO: INPUT DATA - Parse???
        active = dict((p[0], p[1](             )) for p in strategy.items())
        counts = dict((p[0], 0) for p in strategy.items())

        while len(active) > 0:
            for strat in [*active.keys()]:
                try:
                    data = next(active[strat])
                    if counts[strat] == limit:
                        raise StopIteration
                    counts[strat] += 1
                except StopIteration:
                    del active[strat]
                    continue
                
                if self.testRaw(data):
                    return data
                    # active.clear()
                    # break
        '''
        import json
        print(json.dumps(counts, indent=4))
        '''

        return False
    
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