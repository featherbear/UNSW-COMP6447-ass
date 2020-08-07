import React from 'react'

export default class extends React.Component {
  render () {
    const styles = {
      container: {
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
        // alignItems: 'center'
      }
    }
    return (
      <div style={{ ...this.props.style, ...styles.container }}>
        {this.props.children}
      </div>
    )
  }
}
