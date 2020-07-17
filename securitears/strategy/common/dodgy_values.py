import math

def strategy(data=None):
    yield -1
    yield 0
    yield 2**32 - 1      # max for 32 bit binary
    yield -(2**32)       # min for 32 bit binary
    yield 2**32          # exceed 32 bit binary max
    yield 9999999999
    yield -(2**32) - 1   # exceed 32 bit binary min
    yield -9999999999
    yield 0.000000000
    yield 0.1
    yield 0.000000001
    yield -0.1
    yield -0.000000001
    yield math.sqrt(2)
    yield None
