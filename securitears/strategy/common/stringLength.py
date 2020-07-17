# Generates strings of lengths 0 to n

def strategy(data=None):
    limit = 10240
    s = ""
    for i in range(limit):
        s += "."
        yield s