import React from 'react'
import ReactDOM from 'react-dom'

import HeadingCover from './components/home/HeadingCover'
import CoverPage from './components/utils/CoverPage'
import FixedShip from './components/home/FixedElement'

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
    this.navRef = React.createRef('null')
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

      ReactDOM.findDOMNode(this.navRef.current).scrollIntoView()
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
    const hashPage = () => this.handlePageChange((window.location.hash.substr(1) || 'home').toLowerCase()) && false;
    (window.onhashchange = hashPage)()
  }

  renderNavBtn (display, handler) {
    return <h2 className={this.state.page === handler ? 'active-page' : ''} onClick={() => (window.location.hash = handler)}>{display}</h2>
  }

  render () {
    return (
      <div>
        <div style={{ background: 'white' }}>
          <div className='container'>
            <HeadingCover />
          </div>
        </div>
        <div className='nav-bar-container'>
          <div className='nav-bar no-select' ref={this.navRef}>
            {this.renderNavBtn('Home', 'home')}
            {this.renderNavBtn('Crew', 'crew')}
          </div>
        </div>
        <div className='container'>

          {/*
                Perfect SCSS candidate here. @captain
                (Andrew, best mate, 20, less confused here)
            */}
          <CoverPage style={{ height: 'calc(100vh - 64px)' }}>
            {this.state.currentPage}
          </CoverPage>
          <FixedShip />
        </div>
      </div>
    )
  }
}
