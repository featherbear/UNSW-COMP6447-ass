import React from 'react'
import PirateShip from './PirateShip'

export default class extends React.Component {
  render () {
    const style = {
      width: '100%'
    }
    return (
      <div style={{ ...style, ...this.props.svgContainerStyle }}>
        <PirateShip />
      </div>
    )
  }
}
