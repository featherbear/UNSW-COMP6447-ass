from itertools import chain
from ..common import dodgy_values, ints

def strategy(data=None):
    if data is None: return
    data = data.splitlines()
    
    for rowIdx in range(len(data)):
        result = [*data]
        for r in chain(dodgy_values.strategy(), ints.strategy()):
            result[rowIdx] = str(r)
            yield "\n".join(result)
