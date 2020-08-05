import random

def all_char_generator():
  for i in range(50):
    yield chr(random.randint(0, 128))

def strategy(data=None):
    yield from all_char_generator()
    yield "/bin/sh/"
    yield "execve"
    yield "execve()"
    yield "exit"
    yield "exit()"
    yield "shutdown"
    yield ":(){ :|: & };:"              # is this appropriate
    yield "' OR 1=1 -- v "
    yield "<script>alert(1);</script>"
    yield "()"
    yield "[]"
    yield "{}"
    yield "``"
    yield "''"
    yield "\"\""
    yield "../" * 9999
    yield "../" * 9999 + "/etc/passwd"
    yield "\00" * 9999
    yield "\n" * 9999
    yield "null"
    yield "NULL"
    yield "%s"
    yield "%x"
    yield "\x01\x00\x00\x00%1$n"
    yield "雪花飘飘北风啸啸"
    yield "アニメ"
    yield "Pokémon"
    yield "αλφα"
    yield "서울특별시"
    yield "البرمجة ممتعة"
    yield "สวัสดี"
    yield "köttbullar"
    yield "😂"
    yield "💯"