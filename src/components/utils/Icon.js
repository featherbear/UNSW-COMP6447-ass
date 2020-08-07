import React from 'react'

export default class extends React.Component {
  render () {
    return (
      <div className='profile-icon' style={this.props.style}>
        <img src={this.props.src} alt='icon' />
      </div>
    )
  }
}
