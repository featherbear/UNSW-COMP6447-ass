# securiTEARS fuzzer xD

## Shipmates :3

* euwunike
* adruwu
* oscrawr
* rawrger
* teeheeon

## Alter-egos

* Eunike Utojo 
* Andrew Wong 
* Oscar Cheung 
* Roger Tong 
* Theon Ho 

## Installation

Install the Python libraries with:
```
python3 -m pip install -r requirements.txt
```

## How do you use this thing?

Run all the tests with all strategies with:
```
python3 runTests.py
```

By default, each strategy is limited to `500` executions.  
To change the limit, append a program argument containing the execution limit.  
Alternatively, append a `0` to remove the execution limit.
```
python3 runTests.py <limit>
```

To run the fuzzer on a single program:
```
python3 -m securitears [program-name]
```
You can also run the fuzzer with several arguments, run this command to see what arguments it supports:
```
python3 -m securitears -h
```

```
usage: securitears [-h] [--input input] [--type {json,csv,xml,plain}] [--dest dest] [--limit limit] [--wait] [--verbose] program

COMP6447 Fuzzer Project

positional arguments:
  program               executable file to fuzz

optional arguments:
  -h, --help            show this help message and exit
  --input input, -i input
                        input file
  --type {json,csv,xml,plain}, -t {json,csv,xml,plain}
                        fuzz input type
  --dest dest, -d dest  destination crash data
  --limit limit, -l limit
                        execution limit per strategy (default: 500)
  --wait, -w            wait for all strategies to finish
  --verbose, -v         verbose

Dedicated to Adam Banana
```

**NOTE:** Make sure your binaries have executable permissions!

## Some useful ways to start the fuzzer
Fuzz a program using input data
```
python3 -m securitears [program-name] -i [input-data-file]
```

Limit the number of executions for each strategy:
```
python3 -m securitears [program-name] -l [integer]
```

Visually appealing progress bars (if you run the fuzzer without a progress bar you don't get to see progress 😥):
```
python3 -m securitears [program-name] -v
```

Fuzz the program using input data with a strategy execution limit of 1000, showing progress.  
If a crash was successfully performed, save the payload
```
python3 -m securitears [program-name] -i [input-data-file] -l 1000 -v -d [payload-file]
```

---

_Let's sail the seven seas and pillage the binaries of their precious memory corruptions! 🏴‍☠️_
