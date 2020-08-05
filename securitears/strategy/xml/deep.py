import xml.etree.ElementTree as ET
import xml.dom.minidom as MD
import random
'''
Injecting stuff under all the tags
'''
xml_elems = []

def strategy(data=None):
    # recursively dig through nested tag
    # if level reaches limit resurface back to the root
    # numToInsert dictates how many tags to add within another tag
    def _strategy(root, level, limit, numToInsert):
        
        if root not in xml_elems:
            xml_elems.append(root)
            if root.text == None or root.text.isspace():
                if level < limit:
                    for i in range(numToInsert):
                        injection = ET.Element("h1")
                        if level == limit - 1:
                            injection.text = "LMAO"
                        root.append(injection)
                    for child in root:
                        _strategy(child, level + 1, limit, numToInsert)
        return root

    if not data: return
    
    for i in range(3):
        for j in range(15):
            root = ET.fromstring(data)
            _strategy(root, 0, i, j)
            xml = MD.parseString(ET.tostring(root, "unicode").replace("\n",""))
            yield xml.toprettyxml(indent="  ")[23:]

