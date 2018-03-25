import React, {Component} from 'react'
import './DisponibilitySubTab.css'
import axios from 'axios'

class DisponibilitySubTab extends Component {
  constructor (props) {
    super(props)
    this.state = {
      disponibility: []
    }
  }

  componentDidMount () {
    axios.get('/api/students', {
      validateStatus: function (status) {
        return status < 400
      }
    }).then((data) => {
      let students = data.data
      let disponibility = students.map((el) => el.disponibility)
      this.setState({
        disponibility: disponibility.filter((item, pos) => item !== '' && disponibility.indexOf(item) == pos)
      })
    }).catch(function (error) {
    })
  }

  render () {
    return (
      <div className='input-container'>
        {
          this.state.disponibility.map((disponibility, i) => {
            return (
              <div key={i}>
                <input onClick={this.props.onChangeDisponibility} className='filter-input dispo-input' type='button' value={disponibility} />
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default DisponibilitySubTab
