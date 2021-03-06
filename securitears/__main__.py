# Module entry-point


import argparse, sys, os.path
from .util import strToBytes

def checkFile(file):
    if not os.path.exists(file):
        parser.error(f"{file} does not exist!")
    return file

parser = argparse.ArgumentParser(description='COMP6447 Fuzzer Project', prog="securitears", epilog="Dedicated to Adam Banana")
parser.add_argument('program', type=checkFile, help='executable file to fuzz')
parser.add_argument('--input', '-i', metavar="input", type=checkFile, help='input file')
parser.add_argument('--type', '-t', choices=('json', 'csv', 'xml', 'plain'), help='fuzz input type')
parser.add_argument('--strategy', '-s', type=str, help='select specific strategy')
parser.add_argument('--dest', '-d', metavar="dest", type=argparse.FileType('wb'), help='destination crash data')
parser.add_argument('--limit', '-l', type=int, metavar="limit", default=500, help='execution limit per strategy (default: 500)')
parser.add_argument('--wait', '-w', action="store_true", help='wait for all strategies to finish')
parser.add_argument('--verbose', '-v', action="store_true", help='verbose')

if len(sys.argv) == 1:
    parser.print_help(sys.stderr)
    sys.exit(1)

args = parser.parse_args()

if args.input is None and os.path.isfile(args.program + ".txt"):
    print("Automatically detected input file:", args.program + ".txt")
    args.input = args.program + ".txt"

if args.type is None:
    from . import detectFormat
    bootstrap = detectFormat(args.program, inputFile=args.input)
else:
    from . import bootstrap
    bootstrap = bootstrap[args.type]

from . import state
state["verbose"] = args.verbose

with bootstrap(args.program, inputFile=args.input) as w:
    fuzzString = w.fuzz(limit=args.limit, wait=args.wait, strategyName=args.strategy)
    if fuzzString is not None:
        print("\nFound a payload!")
        print("\nInvalid input:")
        print(fuzzString)
        if args.dest:
            args.dest.write(strToBytes(fuzzString))
    else:
        print("\nNo payload found")