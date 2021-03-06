import React, { Component } from 'react'
import './style.css'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
 } from 'react-router-dom'

class NavBar extends Component {
  render () {
    return (
      <div className='navbar-container'>
        <input type='checkbox' id='navbar-dropdown-button' />
        <label className='navbar-dropdown-label' htmlFor='navbar-dropdown-button' >
          <i className='fa fa-bars fa-2x' aria-hidden='true' />
        </label>
        <div className='responsive-navbar-logo'>
          <a href='https://gomycode.tn' target='_blank'>Go My Code</a>
        </div>
        <ul className='topnav'>
          <li className='logo'><a href='https://gomycode.tn' target='_blank'>Go My Code</a></li>
          <li>
            <Link to='/hire' target='_blank'>Hire Grads</Link>
          </li>
          <li><a href='https://gomycode.tn' target='_blank'>Contact Us</a></li>
          <li><a href='https://gomycode.tn/about' target='_blank'>Who are we?</a></li>
          <li className='right'>
            <div className='social-icons-container'>

              <a className='fa fa-facebook social-icon' rel='publisher' target='_blank' href='https://www.facebook.com/gomycode' />

              <a className='fa fa-twitter social-icon' rel='publisher' target='_blank' href='https://twitter.com/gomycode' />

              <a className='fa fa-linkedin social-icon' rel='publisher' target='_blank' href='https://fr.linkedin.com/company/go-my-code' />

              <a className='fa fa-youtube social-icon' rel='publisher' target='_blank' href='https://www.youtube.com/channel/UCB6_JaNT8ovPvRs-zxmcawQ/videos' />

            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default NavBar
