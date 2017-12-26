import React, {Component} from 'react'
import './TechnologiesSubTab.css'

class TechnologiesSubTab extends Component {
  render () {
    return (
      <div className='techno-container'>
        <input className='techno-input' type='button' value='HTML' /><br />
        <input className='techno-input' type='button' value='CSS' /><br />
        <input className='techno-input' type='button' value='Javascript' /><br />
        <input className='techno-input' type='button' value='Bootstrap' /><br />
        <input className='techno-input' type='button' value='Responsive Design' /><br />
        <input className='techno-input' type='button' value='ReactJS' /><br />
        <input className='techno-input' type='button' value='AngularJS' /><br />
        <input className='techno-input' type='button' value='VueJS' /><br />
        <input className='techno-input' type='button' value='React Native' /><br />
        <input className='techno-input' type='button' value='NodeJS' /><br />
        <input className='techno-input' type='button' value='ExpressJS' /><br />
        <input className='techno-input' type='button' value='MongoDB' /><br />
        <input className='techno-input' type='button' value='MeteorJS' /><br />
        <input className='techno-input' type='button' value='Ruby on Rails' /><br />
        <input className='techno-input' type='button' value='.NET' /><br />
        <input className='techno-input' type='button' value='Java' /><br />
        <input className='techno-input' type='button' value='Python' /><br />
        <input className='techno-input' type='button' value='PHP' /><br />
        <input className='techno-input' type='button' value='Others' /><br />

      </div>
    )
  }
}

export default TechnologiesSubTab
