import json
import copy

def strategy(data=None):
    if not data: return
    data = json.loads(data)
    
    yield from _strategy(data, True)  # Permutative
    yield from _strategy(data, False) # Combinative

def typeFuzz(data, path, permutative: bool):
    node = result = copy.deepcopy(data) if permutative else data
    for pos in path[:-1]: node = node[pos]

    old = node[path[-1]]

    # string mode
    node[path[-1]] = "A" * 0x500
    yield json.dumps(result)

    # boolean mode
    node[path[-1]] = True
    yield json.dumps(result)

    node[path[-1]] = False
    yield json.dumps(result)

    # null mode
    node[path[-1]] = None
    yield json.dumps(result)

    # array mode
    node[path[-1]] = [1, "B", 0xCC, True, {}]
    yield json.dumps(result)

    # object mode
    node[path[-1]] = dict(A=0, B=True, C=False, D=[-1])
    yield json.dumps(result)

    # Restore original value
    if not permutative:
        node[path[-1]] = old

def _strategy(data, permutative: bool):
    # Queue contains an array of path tuples to the current node
    queue = [()] # Start off with the entire JSON object

    while queue:
        path = queue.pop(0) # Get the next path
        
        # Resolve node location
        node = data
        for pos in path: node = node[pos]
        
        if type(node) is list:
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
        if node != data:
            yield from typeFuzz(data, path, permutative)
