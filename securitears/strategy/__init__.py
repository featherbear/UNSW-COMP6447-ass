from .csv import __modules as csv_strategy
from .json import __modules as json_strategy
from .plaintext import __modules as plaintext_strategy
from .xml import __modules as xml_strategy

class Strategy:
  def __init__(self, name="", modules={}):
    this.name = name
    this.modules = modules
  
  def get_name(self):
    return this.name

  def get_module(self):
    return this.modules