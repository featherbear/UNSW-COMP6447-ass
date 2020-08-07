
import React from 'react'

import FlexRow from '../utils/FlexRow'
import ShipContainer from './ShipContainer'
import TitleFuzz from './TitleFuzz'
import Chevron from './Chevron'

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
      }
    }
  }

  render () {
    return (
      <CoverPage>
        <FlexRow style={this.state.containerStyle}>
          <ShipContainer style={this.state.shipStyle} />
          <TitleFuzz style={this.state.textStyle} />
        </FlexRow>
        <span onClick={this.props.handleBtnAction} style={{ position: 'absolute', margin: '0 auto', width: '70px', opacity: 0.8, bottom: '8vh', cursor: 'pointer' }}>
          <Chevron />
        </span>
      </CoverPage>
    )
  }
}
