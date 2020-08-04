import random
import json

def genString():
    return "".join(chr(random.randint(0,0x1000 - 1)) for _ in range(10))

def strategy(data=None):
    obj = dict()

    for i in range(500):
        for i in range(20):
            obj[genString()] = genString()
        yield json.dumps(obj)
