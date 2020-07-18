# Generates valid XML strings

from . import BaseBootstrap
from .. import util
from ..Harness import Harness

import xml.etree.ElementTree as XML

class Bootstrap(BaseBootstrap):
    def __repr__(self):
        return f"<XML {super().__repr__()}>"

    @staticmethod
    def detect(filename, inputData=None):
        stat = 0
        
        if inputData is not None:
            try:
                XML.fromstring(inputData)
                stat += 1000
            except XML.ParseError:
                pass

        stat += util.unix_strings(filename, split=False).lower().count("xml")
        return stat

    @classmethod
    def getStrategies(cls):
        return dict(**super().getStrategies(), **cls.strategy["xml"])