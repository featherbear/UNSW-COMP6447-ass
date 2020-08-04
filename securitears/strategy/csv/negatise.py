import csv
import copy

pack = lambda data: "\n".join((",".join(pair) for pair in data))

def strategy(data=None):
    if data is None: return
    data = list(csv.reader(data.splitlines()))
    
    yield from _strategy(data, permutative=True)
    yield from _strategy(data, permutative=False)
    
def _strategy(data, permutative: bool):
    for rowIdx in range(len(data)):
        for colIdx in range(len(data[rowIdx])):
            result = copy.deepcopy(data) if permutative else data
            result[rowIdx][colIdx] = "-" + result[rowIdx][colIdx]
            yield pack(result)
