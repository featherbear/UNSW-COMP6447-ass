# XOR each character

def vals():
    v = 1
    for i in range(8):
        yield v
        v <<= 1
    yield 0xFF

def produce(arr, idx, val):
    old = arr[idx]
    arr[idx] ^= val
    yield "".join(map(chr,arr))
    arr[idx] = old

def strategy(data=None):
    data = list(data.encode())
    for i in range(len(data)):
        for v in vals():
            yield from produce(data, i, v)