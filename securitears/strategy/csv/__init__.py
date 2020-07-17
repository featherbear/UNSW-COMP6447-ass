# Strategies are the different fuzzing techniques that will be used

###################################################################

"""
Dynamically load the strategies for CSV
"""
def __init__():
    import importlib
    import pkgutil

    for _, fp, _ in pkgutil.walk_packages(path=pkgutil.extend_path(__path__, __name__), prefix=__name__ + '.'):
        pyfile = fp[len(__name__) + 1:]
        print("csv " + pyfile)
        try:
            __modules[pyfile] = importlib.import_module(fp).strategy
        except Exception as e:
            print("Error routing " + pyfile + " - " + str(e))
    return __modules

__modules = {}
__init__()

