def strategy(data=None):
    if data is None: return
    
    for i in range(1, 5001):
        yield data * i * 10