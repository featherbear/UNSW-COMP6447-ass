import React from 'react'
import Code from '../components/utils/CodeBlock'

export default class App extends React.Component {
  render () {
    const code = `usage: securitears [-h] [--input input] [--type {json,csv,xml,plain}] [--strategy STRATEGY] [--dest dest] [--limit limit] [--wait] [--verbose] program

COMP6447 Fuzzer Project

positional arguments:
  program               executable file to fuzz

optional arguments:
  -h, --help            show this help message and exit
  --input input, -i input
                        input file
  --type {json,csv,xml,plain}, -t {json,csv,xml,plain}
                        fuzz input type
  --strategy STRATEGY, -s STRATEGY
                        select specific strategy
  --dest dest, -d dest  destination crash data
  --limit limit, -l limit
                        execution limit per strategy (default: 500)
  --wait, -w            wait for all strategies to finish
  --verbose, -v         verbose

Dedicated to Adam Banana`

    return (
      <div className='content usagePage'>
        <h1 className='center'>Installation</h1>
        <h2>Clone the <a href='https://github.com/featherbear/UNSW-COMP6447-ass'>securitears</a> repository</h2>
        Do it. Then navigate into it
        <h2>Install Python libraries</h2>
        <Code>python3 -m pip install -r requirements.txt</Code>
        <h1 className='center'>Usage</h1>
        <i>
          Pro-tip: Make sure the binary you are trying to fuzz has executable
          permissions!
        </i>
        <h2>Test Runner</h2>
        <Code>python3 runTests.py</Code>
        <p>
          By default, each strategy is limited to <code>500</code> executions.
          <br />
          To change the limit, append a program argument containing the
          execution limit.
          <br />
          Alternatively, append a <code>0</code> to remove the execution limit.
        </p>
        <Code>python3 runTests.py &lt;limit&gt;</Code>
        <h2>Module</h2>
        <Code>{code}</Code>
        <h3>Example Uses</h3>
        <Code>python3 -m securitears [program-name]</Code>

        <p>
          Fuzz a program using input data
          <Code>
            python3 -m securitears [program-name] -i [input-data-file]
          </Code>
        </p>
        <p>
          Fuzz a program with a specific strategy
          <Code>python3 -m securitears [program-name] -s [strategy]</Code>
        </p>
        <p>
          Limit the number of executions for each strategy:
          <Code>python3 -m securitears [program-name] -l [integer]</Code>
        </p>
        <p>
          Visually appealing progress bars (if you run the fuzzer without a
          progress bar you don't get to see progress 😥)
          <Code>python3 -m securitears [program-name] -v</Code>
        </p>
        <p>
          Fuzz the program using input data with a strategy execution limit of
          1000, showing progress.
          <br />
          If a crash was successfully performed, save the payload
          <Code>
            python3 -m securitears [program-name] -i [input-data-file] -l 1000
            -v -d [payload-file]
          </Code>
        </p>
        {/*

          const style = {
            width: '100%',
            height: '100%',
            border: 0,
            overflow: 'hidden'
          }

          <iframe
            src={
              'https://carbon.now.sh/embed?bg=rgba(75%2C103%2C127%2C0)&t=material&wt=none&l=text&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=' +
            escape(code)
            }
            style={style}
            sandbox='allow-scripts allow-same-origin'
          />
          */}
      </div>
    )
  }
}
