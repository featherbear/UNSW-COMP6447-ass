
import React from 'react'

export default class extends React.Component {
  render () {
    const styles = {
      container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
      }
    }
    return (
      <div className='flexRow' style={{ ...styles.container, ...(this.props.style || {}) }}>
        {this.props.children}
      </div>
    )
  }
}
