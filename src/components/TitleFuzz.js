import React, { useEffect, useState } from 'react'

const letterMap = {
  s: 'sƨSƧ5$',
  e: 'eɘE3',
  c: 'cC',
  u: 'uU',
  r: 'rRЯɹ',
  i: 'iI1l!',
  t: 'tT',
  a: 'aA4',
  '.': '.,'
}

const inputString = 'securitears.'

const fuzzMap = inputString.split('').map(c => letterMap[c])

const randItem = list => list[Math.floor(Math.random() * list.length)]

function generateNewString (text) {
  const arr = text.split('')
  const i = Math.floor(Math.random() * arr.length)
  arr[i] = randItem(fuzzMap[i])
  return arr.join('')
}

const style = {
  minWidth: '200px'
}

export default function (props) {
  const [text, updateText] = useState(inputString)

  useEffect(() => {
    const interval = setInterval(() => {
      updateText(generateNewString(text))
    }, 500)

    return () => clearInterval(interval)
  })

  return (
    <span style={{ ...style, ...props.style }}>{text}</span>
  )
}
