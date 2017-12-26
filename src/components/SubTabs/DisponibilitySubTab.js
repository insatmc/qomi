import React, {Component} from 'react'
import './DisponibilitySubTab.css'

class DisponibilitySubTab extends Component {
  render () {
    return (
      <div className='dispo-container'>
        <input className='dispo-input' type='button' value='Immediately' /><br />
        <input className='dispo-input' type='button' value='In a few days' /><br />
        <input className='dispo-input' type='button' value='In 1 month' /><br />
        <input className='dispo-input' type='button' value='In 2 months' /><br />
        <input className='dispo-input' type='button' value='In 3 months or more' /><br />
      </div>
    )
  }
}

export default DisponibilitySubTab
