import React from 'react'
import ProfileIcon from '../components/ProfileIcon'

export default class App extends React.Component {
  render () {
    return (
      <div className='content'>
        <h1 className='center'>Meet the Crew</h1>
        <div className='d-flex flex-row'>
          <ProfileIcon src='https://www.kindpng.com/picc/m/95-950368_girl-pirate-eye-patch-cartoon-hd-png-download.png' />
          <ProfileIcon src='https://www.kindpng.com/picc/m/95-950368_girl-pirate-eye-patch-cartoon-hd-png-download.png' />
          <ProfileIcon src='https://www.kindpng.com/picc/m/95-950368_girl-pirate-eye-patch-cartoon-hd-png-download.png' />
          <ProfileIcon src='https://www.kindpng.com/picc/m/95-950368_girl-pirate-eye-patch-cartoon-hd-png-download.png' />
          <ProfileIcon src='https://www.kindpng.com/picc/m/95-950368_girl-pirate-eye-patch-cartoon-hd-png-download.png' />
        </div>
      </div>
    )
  }
}
