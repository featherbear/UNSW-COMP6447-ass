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

## How do you use this thing?
Run all the tests with all strategies with:
```
python3 runTests.py
```
To individually run the fuzzer with a program:
```
python3 -m securitears [program-name]
```
You can also run the fuzzer with several arguments, run this command to see what arguments it supports:
```
python3 -m securitears -h
```

**NOTE:** Make sure your binaries have executable permissions!

## Some useful ways to start the fuzzer
Limit the number of executions for each strategy:
```
python3 -m securitears [program-name] -l [integer]
```
Visually appealing progress bars (if you run the fuzzer without a progress bar you don't get to see progress 😥):
```
python3 -m securitears [program-name] -v
```

Let's sail the seven seas and pillage the binaries of their precious memory corruptions! 🏴‍☠️
