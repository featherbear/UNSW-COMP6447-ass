
import React from 'react'

export default class extends React.Component {
  render () {
    const styles = {
      container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        maxWidth: '100%',
        width: '100%',
        margin: '0 auto'
      }
    }
    return (
      <div className={'flexRow ' + (this.props.class || '')} style={{ ...styles.container, ...this.props.style }}>
        {this.props.children}
      </div>
    )
  }
}
