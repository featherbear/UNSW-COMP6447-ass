import React from 'react'

import HeadingCover from './components/cover'
import CoverPage from './components/utils/CoverPage'

import Home from './pages/Home'
import Crew from './pages/Crew'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      page: null,
      pageCache: {
        // is this how we do it.
        // (Andrew, best mate, 20, confused.)
      },
      currentPage: null
    }

    this.handlePageChange = this.handlePageChange.bind(this)
  }

  handlePageChange (page) {
    if (this.state.page !== page) {
      // Shouldn't we be using a Router or something?
      // (Andrew, best mate, 20, still confused)
      if (page in this.state.pageCache) {
        this.setState({
          page,
          currentPage: this.state.pageCache[page]
        })
      } else {
        const newElement = (() => {
          switch (page) {
            case 'home': return <Home />
            case 'crew': return <Crew />
            default:
              return null
          }
        })()
        if (newElement === null) {
          return this.handlePageChange('home')
        }
        this.setState({
          page,
          pageCache: { ...this.state.pageCache, [page]: newElement },
          currentPage: newElement
        })
      }
    }
  }

  componentDidMount () {
    /*
           .-.
          ( " )
      /\_.' '._/\
      |         |
        \       /
        \    /`
      (__)  /
      `.__.'

      // "Stop it Andrew, you're scaring them"
    */
    const hashPage = () => this.handlePageChange((window.location.hash.substr(1) || 'home').toLowerCase());
    (window.onhashchange = hashPage)()
  }

  render () {
    return (
      <div className='page'>
        <HeadingCover />
        <div id='content' className='page'>
          <div className='nav-bar'>
            <h2 onClick={() => this.handlePageChange('home')}>Home</h2>
            <h2 onClick={() => this.handlePageChange('crew')}>Crew</h2>
          </div>

          {/*
          Perfect SCSS candidate here. @captain
          (Andrew, best mate, 20, less confused here)
          */}
          <CoverPage style={{ height: 'calc(100vh - 64px)' }}>
            {this.state.currentPage}
          </CoverPage>
        </div>

      </div>
    )
  }
}
