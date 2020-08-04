# Fuzzer Report

## How the Fuzzer works

The created fuzzer works both as a standalone module, which allows the user to fuzz a single program, as well as a library, which causes the fuzzer to run all the relevant strategies on their corresponding files.

## Key Framework Components

**Strategies**

Strategies describe the permutation of data which is fed into the binaries. Strategies are defined in the strategies directory and are categorised according to which input format they can be applied to. Strategies which do not rely on the data being a specific format are located in the strategy.commons directory. At their core, each strategy is a generator which produces a series of inputs.

**Bootstraps**

Bootstraps are modules which detect which input format the program needs to be fuzzed with. Having detected a valid input format, the bootstrap retrieves and executes strategies which are specific to that input format, in addition to some generic strategies which are agnostic to input format. Bootstrap contains the fuzz() function which returns a crash string if the binary was fuzzed successfully, and None otherwise.

**Harness**

The Harness class implements the logic related to executing the binary and piping it data. The test function in the harness class determines whether the input has crashed the program. This test method is utilised in the fuzz() function within `bootstrap.py`.

**Console Progress Bars**

Runtime visualisations provide a breakdown of each strategy, its iteration status and success for a particular binary. Successful strategies are highlighted for further analysis. A summary of results is also provided when the `runTest.py` script is used.

**Bugs which can be found**

Current strategies focus on causing segfaults by exploiting buffer overflows. Memory corruptions are also attempted by providing illegitimate values to the program, for example, a negative value for a length input.

**Future Improvements**

The fuzzer is capable of breaking programs, however, it is currently not capable of identifying the minimum condition for causing that breakage. We could implement dynamic strategies which respond to errors raised by the program and mutate themselves in order to find similar faults within the program.

As an example, if the fuzzer finds that a binary segfaults when provided a string of 400 bytes, a dynamic strategy might incrementally decrease the size of the string until locating the minimum number of bytes required to cause that segfault.

In order to facilitate this, a communicate() function has been written in the `harness.py` module which returns the response of the program, as opposed to the test() function which only returns if the program broke.