import React, { Component } from 'react'
import './style.css'

class NavBar extends Component {
  render () {
    return (
      <div className='navbar-container'>
        <ul className='topnav'>
          <li><a href='#home'>Home</a></li>
          <li><a href='#news'>Who are we?</a></li>
          <li><a href='#contact'>Contact Us</a></li>
          <li className='right'><a href='#about'>Connection</a></li>
        </ul>
      </div>
    )
  }
}

export default NavBar
