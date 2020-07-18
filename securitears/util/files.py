import os.path

def strResolveFile(filePath, openFile=False):
    if type(filePath) is str:
        if not os.path.isfile(filePath):
            raise FileNotFoundError(f"{filePath} does not exist")           
        if openFile:
            return open(filePath)

    return filePath