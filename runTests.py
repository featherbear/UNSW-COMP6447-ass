#!/usr/bin/python3

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

securitears.state.update(dict(verbose=True))

for file in files:
    filePath = os.path.join(FILE_PATH, file)
    bootstrap = securitears.detectFormat(filePath)
    with bootstrap(filePath) as w:
        print(w, end=" ")
        print(w.fuzz() or "No payload found", flush=True)