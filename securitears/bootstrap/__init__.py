# Bootstraps are format wrappers over the executable binaries.  
# They provide the abstraction layer for interaction

##############################################################

"""
Select bootstrap with highest score
"""
def detectFormat(filepath):
    if not os.path.isfile(filepath):
        raise FileNotFoundError(f"{filepath} does not exist")
    results = [(bootstrap, bootstrap.detect(filepath)) for bootstrap in __modules.values()]
    return sorted(results, key=lambda p: p[1])[-1][0]




"""
Bootstrap base class.  
Inherit this class to create a new bootstrap
"""
import os
from ..Harness import Harness
class BaseBootstrap(): 
    def __init__(self, filepath):
        if not os.path.isfile(filepath):
            raise FileNotFoundError(f"{filepath} does not exist")

        self.filepath = filepath
        self.harness = Harness(filepath)
    
    def __repr__(self):
        return f"Bootstrap :: {self.filepath}"

    def __enter__(self): 
        return self
      
    def __exit__(self, *_): 
        pass

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