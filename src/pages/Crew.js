import React from 'react'
import createProfile from '../components/crew/Profile'

export default class App extends React.Component {
  render () {
    return (
      <div className='content'>
        <h1 className='center'>Meet the Crew</h1>
        <div className='d-flex flex-column'>
          {createProfile(
            'Captain - Eunike',
            'https://www.kindpng.com/picc/m/95-950368_girl-pirate-eye-patch-cartoon-hd-png-download.png',
            'Use her but don\'t abuse her'
          )}
          {createProfile(
            'Best Mate - Andrew',
            'https://www.kindpng.com/picc/m/95-950368_girl-pirate-eye-patch-cartoon-hd-png-download.png',
            'Spent arguably more time making this website than the actual fuzzer'
          )}
          {createProfile(
            'First Mate - Oscar',
            'https://www.kindpng.com/picc/m/95-950368_girl-pirate-eye-patch-cartoon-hd-png-download.png',
            'Squeals at the sight of XML vulnerabilities'
          )}
          {createProfile(
            'Cabin Boy - Roger',
            'https://www.kindpng.com/picc/m/95-950368_girl-pirate-eye-patch-cartoon-hd-png-download.png',
            'Sails the seas in search of RCEs'
          )}
          {createProfile(
            'Ship Rat - Theon',
            'https://www.kindpng.com/picc/m/95-950368_girl-pirate-eye-patch-cartoon-hd-png-download.png',
            'Gatekeeper of the README.md file'
          )}
        </div>
      </div>
    )
  }
}
