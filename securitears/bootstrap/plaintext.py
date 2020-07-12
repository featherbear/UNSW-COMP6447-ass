# Generates plain-text strings

from . import BaseBootstrap

class Bootstrap(BaseBootstrap):
    def __repr__(self):
        return f"<Plain-text {super().__repr__()}>"

    @staticmethod
    def detect(filename):
        return 1