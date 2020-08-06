import React from 'react'

export default class App extends React.Component {
  render () {
    return (
      <div className='profile-icon'>
        <img src={this.props.src} alt='icon' />
      </div>
    )
  }
}
