import xml.etree.ElementTree as ET
import copy

'''
Injecting scripts under all the tags
'''

injection = ET.Element("script")
injection.text = "alert(1);"
xml_elems = []

def strategy(data=None):
    # recursively dig through nested tag
    def _strategy(root):
        for child in root:
            print(child.tag, child.attrib)
            _strategy(child)
        root.append(injection)
        return root

    #if not data: return
    data = "xml1.txt"       #debug
    xml = ET.parse(data)
    root = xml.getroot()

    _strategy(root)

    for elem in xml_elems:
        elem.append(injection)
    
    yield ET.tostring(root).decode('utf-8')

'''
xml = next(strategy())
f = open("output.txt", "w")
f.write(xml)
f.close()
'''