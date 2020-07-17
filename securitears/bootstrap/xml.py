# Generates valid XML strings

from . import BaseBootstrap
from .. import util
from ..Harness import Harness

class Bootstrap(BaseBootstrap):
    def __repr__(self):
        return f"<XML {super().__repr__()}>"

    @staticmethod
    def detect(filename):
        # harness = Harness(filename)
        return util.strings(filename, split=False).lower().count("xml")