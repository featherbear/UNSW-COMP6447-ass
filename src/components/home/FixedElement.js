import React from 'react'
import PirateShip from './PirateShip'
import Fixed from '../utils/Fixed'
import ShipContainer from './ShipContainer'

export default class extends React.Component {
  render () {
    const style = {
      bottom: 0,
      right: 0,
      width: '60vw',
      opacity: 0.2,
      zIndex: -1,
      transform: 'translateY(3%) rotate(-8deg)'
    }

    return (
      <Fixed style={style}>
        <ShipContainer />
      </Fixed>
    )
  }
}
