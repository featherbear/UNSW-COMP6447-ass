import xml.etree.ElementTree as ET
from ..common.dodgy_strings import strategy as dodgy_strings
import random

'''
Injecting dodgy strings into attributes for xml
'''

xml_elems = []

def strategy(data=None):
    # recursively dig through nested tag
    def _strategy(root):
        xml_elems.append(root)
        for child in root:
            _strategy(child)
        return root

    if not data: return
    root = ET.fromstring(data)

    _strategy(root)

    for string in dodgy_strings():
        for elem in xml_elems:        
            if not elem.attrib:
                continue
            attribs = list(elem.attrib)
            elem.attrib[random.choice(attribs)] = string
            yield ET.tostring(root, "unicode")