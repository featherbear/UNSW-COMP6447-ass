# Generates valid CSV strings

from . import BaseBootstrap
from .. import util

class Bootstrap(BaseBootstrap):
    def __repr__(self):
        return f"<CSV {super().__repr__()}>"

    @staticmethod
    def detect(filename):
        return util.strings(filename, split=False).lower().count("csv")