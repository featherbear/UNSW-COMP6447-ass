def strategy(data=None):
    yield 0
    
    for i in range(32 + 2):
        x = 2**i
        yield x
        yield -x