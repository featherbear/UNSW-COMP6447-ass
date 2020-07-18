def strategy(data=None):
    if data is None: return
    
    for i in range(1, 101):
        yield data * i