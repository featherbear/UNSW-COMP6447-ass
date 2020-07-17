state = {}

# from .strategy import __modules as strategy
from .strategy import csv_strategy, json_strategy,plaintext_strategy,xml_strategy
from .bootstrap import __modules as bootstrap, detectFormat
from .Harness import Harness
from . import util