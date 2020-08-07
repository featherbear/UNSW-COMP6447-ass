import React from 'react'
import Fixed from '../utils/Fixed'
import ShipContainer from './ShipContainer'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      opacity: 0
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll (event) {
    const Y = window.scrollY
    const max = window.innerHeight
    // Ignore cover page scroll
    this.setState({
      style: {
        ...this.state.style,
        opacity: Y / max
      }
    })
  }

  render () {
    const style = {
      bottom: 0,
      right: 0,
      width: '60vw',
      opacity: 0.3,
      zIndex: -1,
      transform: 'translateY(3%) rotate(-8deg)'
    }

    return (
      <Fixed style={style}>
        <ShipContainer style={this.state.style} />
      </Fixed>
    )
  }
}
