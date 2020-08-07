
import React from 'react'

export default class extends React.Component {
  render () {
    return (
      <div className='flexRow' style={{ position: 'fixed', ...this.props.style }}>
        {this.props.children}
      </div>
    )
  }
}
