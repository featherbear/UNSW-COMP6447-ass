import React from 'react'
import createProfile from '../components/crew/Profile'

export default class App extends React.Component {
  render () {
    return (
      <div className='content'>
        <h1 className='center'>Meet the Crew</h1>
        <div className='d-flex flex-column'>
          {createProfile(
            "Captain - Eunike",
            'https://www.kindpng.com/picc/m/95-950368_girl-pirate-eye-patch-cartoon-hd-png-download.png',
            'wee'
          )}
          {createProfile(
            'Best Mate - Andrew',
            'https://www.kindpng.com/picc/m/95-950368_girl-pirate-eye-patch-cartoon-hd-png-download.png',
            ''
          )}
          {createProfile(
            'First Mate - Oscar',
            'https://www.kindpng.com/picc/m/95-950368_girl-pirate-eye-patch-cartoon-hd-png-download.png',
            ''
          )}
          {createProfile(
            'ROGER WHAT ARE YOU. WHO ARE YOU - Roger',
            'https://www.kindpng.com/picc/m/95-950368_girl-pirate-eye-patch-cartoon-hd-png-download.png',
            ''
          )}
          {createProfile(
            'Ship Rat / Parrot - Theon',
            'https://www.kindpng.com/picc/m/95-950368_girl-pirate-eye-patch-cartoon-hd-png-download.png',
            ''
          )}
        </div>
      </div>
    )
  }
}
