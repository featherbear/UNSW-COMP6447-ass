#!/usr/bin/python3

FILE_PATH = "./tests/"
LIMIT = 2000

######################

"""
Find test programs
"""
import re, os
fileFilter = re.compile("[^\.]*$")
files = filter(lambda name: fileFilter.match(os.path.basename(name)), os.listdir(FILE_PATH))

"""
Fuzzer
"""
import securitears
securitears.state.update(dict(verbose=True))

for file in files:
    filePath = os.path.join(FILE_PATH, file)

    # Detect input format through some heuristics
    bootstrap = securitears.detectFormat(filePath)

    with bootstrap(filePath, inputFile=(filePath + ".txt") if os.path.isfile(filePath + ".txt") else None) as w:
        print(w, end=" ")
        result = w.fuzz(limit=LIMIT)
        print(f"Payload: {result}" if result is not None else "No payload found", flush=True)
