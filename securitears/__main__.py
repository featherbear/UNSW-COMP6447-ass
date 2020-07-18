# Module entry-point


if __name__ == "__main__":
    import argparse, sys, os.path

    parser = argparse.ArgumentParser(description='COMP6447 Fuzzer Project', prog="securitears", epilog="Dedicated to Adam Banana")
    parser.add_argument('program', type=lambda file: file if os.path.exists(file) else parser.error(f"The program {file} does not exist!"), help='executable file to fuzz')
    parser.add_argument('--input', '-i', metavar="input", type=argparse.FileType('r'), help='input file')
    parser.add_argument('--type', '-t', choices=('json', 'csv', 'xml', 'plain'), help='fuzz input type')
    parser.add_argument('--dest', '-d', metavar="dest", type=argparse.FileType('w'), help='destination crash data')
    parser.add_argument('--limit', '-l', type=int, metavar="limit", help='execution limit per strategy')
    parser.add_argument('--verbose', '-v', action="store_true", help='verbose')

    if len(sys.argv) == 1:
        parser.print_help(sys.stderr)
        sys.exit(1)

    args = parser.parse_args()
    
    if args.type is None:
        from . import detectFormat
        bootstrap = detectFormat(args.program, inputFile=args.input)
    else:
        from . import bootstrap
        bootstrap = bootstrap[args.type]

    from . import state
    state["verbose"] = args.verbose

    with bootstrap(args.program, inputFile=args.input) as w:
        print(w)
        fuzzString = w.fuzz(limit=args.limit)
        if fuzzString is not None:
            print("Found a payload!")
        else:
            print("No payload found")