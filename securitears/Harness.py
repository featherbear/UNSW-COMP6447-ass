# Feeds input into the program and watches its behaviour

import subprocess
from typing import Union
from .util import strToBytes

class Harness:
    def __init__(self, filePath):
        self.filePath = filePath

    def test(self, data: Union[bytes, object]):
        data = strToBytes(data)

        with subprocess.Popen(self.filePath,
                              stdin=subprocess.PIPE,
                              stdout=subprocess.DEVNULL,
                              stderr=subprocess.DEVNULL) as p:
            data = p.communicate(data)
            return p.returncode not in [0, None]

    def communicate(self, data):
        with subprocess.Popen(self.filePath,
                              stdin=subprocess.PIPE,
                              stdout=subprocess.PIPE,
                              stderr=subprocess.PIPE) as p:
            return (*p.communicate(data.encode()), p.returncode)
