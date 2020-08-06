import json
import string
from random import choice

def strategy(data=None):
    result = {}
    for i in range(0, 500):
        for j in range(i*128, (i+1)*128):
            result[j] = True
        yield json.dumps(result)