import React from 'react'
import anime from 'animejs'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.ref = React.createRef()
  }

  componentDidMount () {
    let o
    anime({
      targets: this.ref.current.querySelector('g'),
      // Andrew, why.
      keyframes: (i => [(o = i => ({ translateY: -i }))(i), o(-i)])(1),
      duration: 2000,
      direction: 'alternate',
      easing: 'easeInSine',
      loop: true
    })
  }

  render () {
    // https://freeicons.io/arrow-icons/arrow-double-chevron-down-icon-icon
    return (
      <svg version='1.1' viewBox='0 0 32 32' ref={this.ref}>
        <g>
          <path
            d='M22.285,15.349L16,21.544l-6.285-6.196c-0.394-0.391-1.034-0.391-1.428,0c-0.394,0.391-0.394,1.024,0,1.414   l6.999,6.899c0.379,0.375,1.048,0.377,1.429,0l6.999-6.9c0.394-0.39,0.394-1.024,0-1.414   C23.319,14.958,22.679,14.958,22.285,15.349z'
            fill='#121313'
          />
          <path
            d='M15.286,16.662c0.379,0.375,1.048,0.377,1.429,0l6.999-6.899c0.394-0.391,0.394-1.024,0-1.414   c-0.394-0.391-1.034-0.391-1.428,0L16,14.544L9.715,8.349c-0.394-0.391-1.034-0.391-1.428,0c-0.394,0.391-0.394,1.024,0,1.414   L15.286,16.662z'
            fill='#121313'
          />
        </g>
      </svg>
    )
  }
}
