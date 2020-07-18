# Generates valid CSV strings

from . import BaseBootstrap
from .. import util
from ..Harness import Harness

class Bootstrap(BaseBootstrap):
    def __repr__(self):
        return f"<CSV {super().__repr__()}>"

    @staticmethod
    def detect(filename, inputData=None):
        stat = 0
        
        stat += util.unix_strings(filename, split=False).lower().count("csv")
        return stat


    @classmethod
    def getStrategies(cls):
        return dict(**super().getStrategies(), **cls.strategy["csv"])