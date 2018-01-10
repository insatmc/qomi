import React, {Component} from 'react'
import './ContractSubTab.css'
import axios from 'axios'

class ContractSubTab extends Component {
  constructor (props) {
    super(props)
    this.state = {
      contracts: []
    }
  }

  componentDidMount () {
    axios.get('/api/students', {
      validateStatus: function (status) {
        return status < 400 // Reject only if the status code is greater than or equal to 500
      }
    }).then((data) => {
      let students = data.data
      let studentsLookingFor = students.map((el) => el.lookingFor)
      let contracts = studentsLookingFor.reduce((acc, el) => acc = acc.concat(el), [])
      this.setState({
        contracts: contracts.filter((item, pos) => contracts.indexOf(item) == pos)
      })
    }).catch(function (error) {
    })
  }

  render () {
    return (
      <div className='input-container'>
        {
          this.state.contracts.map((contract, i) => {
            return (
              <div key={i}>
                <input onClick={this.props.onChangeContract} className='filter-input contract-input' type='button' value={contract} />
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default ContractSubTab
