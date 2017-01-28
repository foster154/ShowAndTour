import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
require('../styles/_header.scss')

class Header extends Component {
  renderLinks () {
    if (this.props.authenticated) {
      // Currently logged in
      return [
        <li key={1}>
          <Link to='/'>Dashboard</Link>
        </li>,
        <li key={2}>
          <Link to='/tours'>Tours</Link>
        </li>,
        <li key={3}>
          <Link to='/signout'>Sign Out</Link>
        </li>
      ]
    } else {
      // sign in or sign up
      return [
        <li key={1}>
          <Link to='/signin'>Sign In</Link>
        </li>,
        <li key={2}>
          <Link to='/signup'>Sign Up</Link>
        </li>
      ]
    }
  }

  render () {
    return (
      <nav className='main-nav'>
        <ul>
          <li className='logo'>
            <Link to='/'><img src='../../img/logo-white.png' /></Link>
          </li>
          {this.renderLinks()}
        </ul>
      </nav>
    )
  }
}

function mapStateToProps (state) {
  return { authenticated: state.auth.authenticated }
}

Header.propTypes = {
  authenticated: PropTypes.bool
}

export default connect(mapStateToProps)(Header)
