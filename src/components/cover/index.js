
import React from 'react'

import FlexRow from '../utils/FlexRow'
import ShipContainer from './ShipContainer'
import TitleFuzz from './TitleFuzz'
import CoverPage from '../utils/CoverPage'

export default class extends React.Component {
  constructor (props) {
    super(props)

    this.minHeight = 50
    this.initialHeight = 200

    this.state = {
      shipStyle: {
        transformOrigin: 'top left',
        transform: 'scale(1) translateY(0px)'
      },
      textStyle: {
        margin: '0 50px',
        fontSize: '3em'

      },
      containerStyle: {
        userSelect: 'none'
        // backgroundColor: 'rgba(0, 255, 255, 0.6)'

      }
    }

    // this.handleScroll = this.handleScroll.bind(this)
  }

  // componentDidMount () {
  //   window.addEventListener('scroll', this.handleScroll)
  // }

  // componentWillUnmount () {
  //   window.removeEventListener('scroll', this.handleScroll)
  // }

  // handleScroll (event) {
  //   const scrollTop = window.scrollY
  //   const logoHeight = Math.max(this.minHeight, this.initialHeight - scrollTop)
  //   const textOffset = Math.min(this.initialHeight, scrollTop)

  //   this.setState({
  //     svgContainerStyle: {
  //       ...this.state.svgContainerStyle
  //       //  translateY(-${textOffset}px)`
  //     },
  //     textStyle: {
  //       ...this.state.textStyle,
  //       transform: `translateY(-${textOffset}px)`
  //     },
  //     shipStyle: {
  //       ...this.state.shipStyle,
  //       transform: `scale(${logoHeight / this.initialHeight})`
  //     },
  //     containerStyle: {
  //       ...this.state.containerStyle

  //     }
  //   })
  // }

  render () {
    return (
      <CoverPage>
        <FlexRow style={this.state.containerStyle}>
          <ShipContainer svgContainerStyle={this.state.shipStyle} />
          <TitleFuzz style={this.state.textStyle} />
        </FlexRow>
      </CoverPage>
    )
  }
}
