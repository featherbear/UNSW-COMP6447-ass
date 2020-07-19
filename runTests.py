#!/usr/bin/python3

FILE_PATH = "./tests/"
VERBOSE = True
LIMIT = 500
WAIT = True

######################

from blessed import Terminal
term = Terminal()
print(term.home + term.clear)

# ./runTests <limit>
try: import sys; LIMIT = int(sys.argv[1])
except: pass

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
securitears.state.update(dict(verbose=VERBOSE))

results = dict()

for file in files:
    filePath = os.path.join(FILE_PATH, file)

    # Detect input format through some heuristics
    inputFile = (filePath + ".txt") if os.path.isfile(filePath + ".txt") else None
    bootstrap = securitears.detectFormat(filePath, inputFile=inputFile)

    with bootstrap(filePath, inputFile=inputFile) as w:
        result = w.fuzz(limit=LIMIT, wait=WAIT)
        if result is not None:
            with open(filePath + ".bad.txt", "wb") as f:
                f.write(securitears.util.strToBytes(result))
            print("\nPayload: FOUND", flush=True)
        else:
            print("\nNo payload found", flush=True)

        results[file] = result is not None

"""
Results
"""
print("\n")
print(term.bold(term.underline(("Fuzzing Results"))))
print(f"Successful fuzzes: {len([_ for _ in results.values() if _])}/{len(results.values())}")
for file in results:
    print(term.green(f"{file}: YES") if results[file] else term.red(f"{file}: NO"))