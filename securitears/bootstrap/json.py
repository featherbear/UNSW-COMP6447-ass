# Generates valid JSON strings

from . import BaseBootstrap
from .. import util
from ..Harness import Harness

import json

class Bootstrap(BaseBootstrap):
    def __repr__(self):
        return f"<JSON {super().__repr__()}>"

    @staticmethod
    def detect(filename, inputData=None):
        stat = 0
        
        try:
            json.loads(inputData)
            stat += 1000
        except json.decoder.JSONDecodeError:
            pass

        stat += util.strings(filename, split=False).lower().count("json")
        return stat

    @classmethod
    def getStrategies(cls):
        return dict(**super().getStrategies(), **cls.strategy["json"])