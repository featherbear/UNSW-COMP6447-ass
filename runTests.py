#!/usr/bin/python3

FILE_PATH = "./tests/"
LIMIT = 2000

######################

from blessed import Terminal
term = Terminal()

print(term.home + term.clear)

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

results = {}

for file in files:
    filePath = os.path.join(FILE_PATH, file)

    # Detect input format through some heuristics
    inputFile = (filePath + ".txt") if os.path.isfile(filePath + ".txt") else None
    bootstrap = securitears.detectFormat(filePath, inputFile=inputFile)

    with bootstrap(filePath, inputFile=inputFile) as w:
        result = w.fuzz(limit=LIMIT)
        print(f"Payload: FOUND" if result is not None else "No payload found", flush=True)

        results[file] = result

"""
Results
"""

print("\n")
print(term.bold(term.underline(("Fuzzing Results"))))
print(f"Successful fuzzes: {len([_ for _ in results.values() if _ is not None])}/{len(results.values())}")
for file in results:
    print(term.green(f"{file}: YES") if results[file] is not None else term.red(f"{file}: NO"))