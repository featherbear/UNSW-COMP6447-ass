
def __init__():
    import importlib
    import os
    import pkgutil

    for fp in filter(lambda s: s != "__pycache__", next(os.walk(__path__[0]))[1]):
        try:
            __modules[fp] = importlib.import_module(f"{__name__}.{fp}").__modules
        except Exception as e:
            print("Error routing " + fp + " - " + str(e))
    return __modules

__modules = {}
__init__()
