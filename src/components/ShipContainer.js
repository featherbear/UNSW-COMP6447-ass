import React from 'react'
import PirateShip from './PirateShip'

export default class extends React.Component {
  render () {
    return (
      <div style={this.props.svgContainerStyle}>
        <PirateShip />
      </div>
    )
  }
}
