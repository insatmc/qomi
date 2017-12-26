import React, {Component} from 'react'
import './ContractSubTab.css'

class ContractSubTab extends Component {
  render () {
    return (
      <div className='contract-container'>
        <input className='contract-input' type='button' value='Freelance' /><br />
        <input className='contract-input' type='button' value='CDD' /><br />
        <input className='contract-input' type='button' value='CDI' /><br />
        <input className='contract-input' type='button' value='Others' /><br />
      </div>
    )
  }
}

export default ContractSubTab
