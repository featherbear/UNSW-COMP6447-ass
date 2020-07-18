import json
import copy

def strategy(data=None):
    if not data: return
    data = json.loads(data)
    
    yield from _strategy(data, True)  # Permutative
    yield from _strategy(data, False) # Combinative

def _strategy(data, permutative: bool):
    # Queue contains an array of path tuples to the current node
    queue = [()] # Start off with the entire JSON object

    while queue:
        path = queue.pop(0) # Get the next path
        
        # Resolve node location
        node = data
        for pos in path: node = node[pos]
        
        if type(node) in [int, float]:
            '''
            Invert the sign of all ints and floats
            '''
            
            node = result = copy.deepcopy(data) if permutative else data
            for pos in path[:-1]: node = node[pos]

            node[path[-1]] = -node[path[-1]]

            yield json.dumps(result)
        elif type(node) is list:
            '''
            Add path tuples for new list elements
            '''
            for idx in range(len(node)):
                queue.append((*path, idx))
        elif type(node) is dict:
            '''
            Add path tuples for new dictionary keys
            '''
            for key in node:
                queue.append((*path, key))
