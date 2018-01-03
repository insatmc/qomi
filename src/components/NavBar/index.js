import React, { Component } from 'react'
import './style.css'

class NavBar extends Component {
  render () {
    return (
      <div className='navbar-container'>
        <ul className='topnav'>
          <li><a href='https://gomycode.tn' target='_blank'>Go My Code</a></li>
          <li><a href='https://gomycode.tn/about' target='_blank'>Who are we?</a></li>
          <li><a href='https://gomycode.tn' target='_blank'>Contact Us</a></li>
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
