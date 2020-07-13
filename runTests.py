FILE_PATH = "./tests/"

######################

"""
Find test programs
"""
import re, os
fileFilter = re.compile("[^\.]*$")
files = filter(lambda name: fileFilter.match(os.path.basename(name)), os.listdir(FILE_PATH))

# results = dict()

"""
Detect input format through some heuristics
"""
import securitears

for file in files:
    filePath = os.path.join(FILE_PATH, file)
    bootstrap = securitears.detectFormat(filePath)
    with bootstrap(filePath) as w:
        w.fuzz()