import {HiHome} from 'react-icons/hi'
import {AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import {Link} from 'react-router-dom'
import {Component} from 'react'

// import ContactUs from '../ContactUs'
import AppTheme from '../../context/Theme'
import {
  DivContainer,
  ListContainer,
  ListItems,
  SpanEl,
  ParaEl,
} from './styledComponents'

import './index.css'

class Navbar extends Component {
  render() {
    return (
      <AppTheme.Consumer>
        {value => {
          const {activeTheme} = value
          const color = activeTheme === 'light' ? '#000000' : '#ffffff'
          const hoverBgColor = activeTheme === 'light' ? '#616e7c' : '#475569'

          return (
            <DivContainer>
              <ListContainer>
                <Link to="/">
                  <ListItems color={`${color}`} bgColor={`${hoverBgColor}`}>
                    <span className="nav-icons">
                      <HiHome size={20} />
                    </span>{' '}
                    <SpanEl>Home</SpanEl>
                  </ListItems>
                </Link>
                <Link to="/trending">
                  <ListItems color={`${color}`} bgColor={`${hoverBgColor}`}>
                    <span className="nav-icons">
                      <AiFillFire size={20} />
                    </span>{' '}
                    <SpanEl>Trending</SpanEl>
                  </ListItems>
                </Link>
                <Link to="/gaming">
                  <ListItems color={`${color}`} bgColor={`${hoverBgColor}`}>
                    <span className="nav-icons">
                      <SiYoutubegaming size={20} />
                    </span>{' '}
                    <SpanEl>Gaming</SpanEl>
                  </ListItems>
                </Link>
                <Link to="/saved-videos">
                  <ListItems color={`${color}`} bgColor={`${hoverBgColor}`}>
                    <span className="nav-icons">
                      <MdPlaylistAdd size={20} />
                    </span>
                    <SpanEl>Saved videos</SpanEl>
                  </ListItems>
                </Link>
              </ListContainer>
              <div className="sidebar-bottom">
                <ParaEl color={`${color}`}>CONTACT US</ParaEl>
                <div className="sidebar-logo-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                    className="sidebar-logo"
                  />
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                    className="sidebar-logo"
                  />
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                    className="sidebar-logo"
                  />
                </div>
                <ParaEl color={`${color}`}>
                  Enjoy! Now to see your channels and recommendations!
                </ParaEl>
              </div>
            </DivContainer>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default Navbar
