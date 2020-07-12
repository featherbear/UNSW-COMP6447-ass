"""
Unix strings wrapper in Python
"""

import subprocess

# Command handler
def strings(filename, *, split=True, cache=True):
    return [_stringsNoCache, _stringsCache][cache](filename, split)

# Call `strings filename`
def __stringsCall(filename):
    return subprocess.check_output(('strings', filename), encoding="utf8")

# Use the cache to check for previous results
def _stringsCache(filename, split=True):
    if 'cache' not in _stringsCache.__dict__:
        _stringsCache.cache = {}
    if filename in _stringsCache.cache:
        output = _stringsCache.cache[filename]
    else:
        output = _stringsCache.cache[filename] = __stringsCall(filename)
    return output.split('\n') if split else output

# Reopen the file
def _stringsNoCache(filename, split=True):
    output = __stringsCall(filename)
    return output.split('\n') if split else output
