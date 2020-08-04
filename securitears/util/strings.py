def strToBytes(data):
    if type(data) is bytes:
        return data
    
    if type(data) is str:
        return data.encode()
    else:
        return str(data).encode()
