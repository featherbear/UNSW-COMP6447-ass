
import React from 'react'

export default class extends React.Component {
  render () {
    const styles = {
      container: {
        position: 'sticky',
        top: 0
      }
    }
    return (
      <div style={styles.container}>
        {this.props.children}
      </div>
    )
  }
}
