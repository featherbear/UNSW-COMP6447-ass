import React from 'react'
import ReactDOM from 'react-dom'

import HeadingCover from './components/home/HeadingCover'
import CoverPage from './components/utils/CoverPage'
import FixedShip from './components/home/FixedElement'

import Home from './pages/Home'
import Crew from './pages/Crew'
import Usage from './pages/Usage'

const defaultPage = 'home'

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

    this.homeRef = React.createRef()
    this.navRef = React.createRef()

    this.handlePageChange = this.handlePageChange.bind(this)
    this.scrollToContent = this.scrollToContent.bind(this)
  }

  handlePageChange (page, noScroll) {
    if (this.state.page !== page) {
      if (page === null) {
        this.setState({
          page
        })

        ReactDOM.findDOMNode(this.homeRef.current).scrollIntoView()

        return
      }

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
            case 'usage': return <Usage />
            default:
              return null
          }
        })()
        if (newElement === null) {
          // Default page
          return this.handlePageChange(defaultPage)
        }
        this.setState({
          page,
          pageCache: { ...this.state.pageCache, [page]: newElement },
          currentPage: newElement
        })
      }

      if (!noScroll) {
        this.scrollToContent()
      }
    }
  }

  scrollToContent () {
    ReactDOM.findDOMNode(this.navRef.current).scrollIntoView()
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
    const hashPage = () => this.handlePageChange(window.location.hash.substr(1).toLowerCase() || null) && false
    this.handlePageChange(window.location.hash.substr(1).toLowerCase() || defaultPage, true);
    (window.onhashchange = hashPage)()
  }

  renderNavBtn (display, handler) {
    return <h2 className={this.state.page === handler ? 'active-page' : ''} onClick={() => (window.location.hash = handler)}>{display}</h2>
  }

  render () {
    return (
      <div>
        <div style={{ background: 'white' }} ref={this.homeRef}>
          <div className='container width80'>
            <HeadingCover handleBtnAction={this.scrollToContent} />
          </div>
        </div>
        <div>
          <div className='nav-bar-container'>
            <div className='nav-bar width80 no-select' ref={this.navRef}>
              {this.renderNavBtn('Home', 'home')}
              {this.renderNavBtn('Usage', 'usage')}
              {this.renderNavBtn('Crew', 'crew')}
            </div>
          </div>
          <div className='container width80'>
            {/*
                Perfect SCSS candidate here. @captain
                (Andrew, best mate, 20, less confused here)

                <CoverPage style={{ height: 'calc(100vh - 64px)', flexDirection: 'column' }}>
            */}

            <CoverPage style={{ height: '100%', minHeight: '100vh', justifyContent: 'start', flexDirection: 'column' }}>
              {this.state.currentPage}

              <footer>
                <hr />
                <i>Let's sail the seven seas and pillage the binaries of their precious memory corruptions! <img style={{ height: '1em' }} src='https://github.githubassets.com/images/icons/emoji/unicode/1f3f4-2620.png' alt='pirate flag' /></i>
              </footer>
            </CoverPage>
            <FixedShip />
          </div>
        </div>
      </div>
    )
  }
}
