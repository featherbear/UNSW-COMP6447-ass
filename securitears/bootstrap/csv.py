# Generates valid CSV strings

from . import BaseBootstrap
from .. import util
from ..Harness import Harness

class Bootstrap(BaseBootstrap):
    def __repr__(self):
        return f"<CSV {super().__repr__()}>"

    @staticmethod
    def detect(filename):
        # harness = Harness(filename)
        return util.strings(filename, split=False).lower().count("csv")

    @classmethod
    def getStrategies(cls):
        return cls.strategy["csv"]