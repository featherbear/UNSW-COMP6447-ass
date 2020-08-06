import React from 'react'
import anime from 'animejs'

export default class App extends React.Component {
  componentDidMount () {
    anime({
      targets: 'svg #Waves path',
      d: `M0,499.7c94.74,75.65,185.15,40.55,221.52-12.52c6.81,18.42,36.91,45.39,97.17,38.73
                c36.78-3.71,58.61-14.49,93.26-49.55c13.59,16.24,63.09,15.35,84.26,15.25c50.21-0.25,83.77-11.73,116.42-49.88
                c11.61,14.7,99.71,6.31,107.37-8.16`,
      duration: 4000,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine'
    })
    let o
    console.log(anime)
    anime({
      targets: 'svg #Ship',
      // Andrew, why.
      keyframes: (i => [(o = i => ({ rotate: i, translateX: -i }))(i), o(-i)])(1),
      duration: 8000,
      direction: 'alternate',
      easing: 'linear',
      loop: true
    })
  }

  render () {
    const style = {
      svg: { enableBackground: 'new 0 0 720.01 565.87' },
      ship: {
        transformOrigin: '50% 50%',
        transformBox: 'fill-box'
      },
      st1: {
        fill: 'none',
        stroke: '#50667c',
        strokeMiterlimit: 10
      },
      st2: {
        fill: 'none',
        stroke: '#000000',
        strokeMiterlimit: 10
      }
    }

    return (
      <svg
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        x='0px'
        y='0px'
        viewBox='0 0 720.01 565.87'
        style={style.svg}
      >
        <g id='Waves'>
          <path
            style={style.st1}
            className='st1'
            d='M0,539.22c58.92,25.81,134.75,16.93,171.12-36.14c6.81,18.42,30.54,23.31,50.16,22.42
                c49.24-2.24,97.36-23.63,132.01-58.69c13.59,16.24,36.62,21.01,57.79,20.91c50.21-0.25,99.86-23.26,132.51-61.41
                c39.76,43.65,148.54-5.13,176.42-36.47'
          />
        </g>

        <g id='Ship' style={style.ship}>
          <path
            className='st2'
            style={style.st2}
            d='M253.28,512.72c-101-142-32-319-32-319s159,159,360,170c0,0,18.69,34.31,2,74'
          />
          <path className='st2' style={style.st2} d='M866.01,371.87' />
          <path className='st2' style={style.st2} d='M32.01,565.87' />
          <line
            className='st2'
            style={style.st2}
            x1='387.28'
            y1='309.72'
            x2='451.28'
            y2='34.72'
          />
          <polyline
            className='st2'
            style={style.st2}
            points='427.28,139.72 582.28,172.72 451.28,34.72'
          />
        </g>
      </svg>
    )
  }
}
