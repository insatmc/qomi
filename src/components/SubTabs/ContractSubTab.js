import React, {Component} from 'react'
import './ContractSubTab.css'

class ContractSubTab extends Component {
  render () {
    return (
      <div className='contract-container'>
        <input onClick={this.props.onChangeContract} className='contract-input' type='button' value='Internship' /><br />
        <input onClick={this.props.onChangeContract} className='contract-input' type='button' value='Freelance' /><br />
        <input onClick={this.props.onChangeContract} className='contract-input' type='button' value='CDD' /><br />
        <input onClick={this.props.onChangeContract} className='contract-input' type='button' value='CDI' /><br />
        <input onClick={this.props.onChangeContract} className='contract-input' type='button' value='Others' /><br />
      </div>
    )
  }
}

export default ContractSubTab
