import React from 'react'

import HeadingCover from './components/cover'
import CoverPage from './components/utils/CoverPage'

import Home from './pages/Home'
import Who from './pages/Who'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      page: 'home'
    }

    this.handlePageChange = this.handlePageChange.bind(this)
  }

  handlePageChange (page) {
    if (this.state.page !== page) {
      this.setState({
        page: page
      })
    }
  }

  render () {
    return (
      <div className='page'>
        <HeadingCover />
        <CoverPage>
          <div id='content' className='page'>
            <div className='nav-bar'>
              <h2 onClick={() => this.handlePageChange('home')}>Home</h2>
              <h2 onClick={() => this.handlePageChange('who')}>Who</h2>
            </div>
            {this.state.page === 'home' ? <Home /> : <Who />}
          </div>
        </CoverPage>
      </div>
    )
  }
}
