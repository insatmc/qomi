import React, { Component } from 'react'
import './style.css'
import axios from 'axios'

class RecruitsToDisplay extends Component {
  constructor (props) {
    super(props)
    this.state = {
      recruits: [],
      recruiterToFind: ''
    }
  }

  componentDidMount () {
    axios.get('/api/recruits', {
      validateStatus: function (status) {
        return status < 400 // Reject only if the status code is greater than or equal to 500
      }
    }).then((data) => {
      console.log(data)
      let recruits = data.data
      this.setState({
        recruits: recruits
      })
    }).catch(function (error) {
      console.log(error)
    })
  }

  searchRecruiter (e) {
    this.setState({
      recruiterToFind: e.target.value
    })
  }

  render () {
    return (
      <div>
        <header className='recruits-offers-page-header'>
          <h2 className='recruits-container-header'>Recruiters Applications</h2>
          <input className='form-control' onChange={this.searchRecruiter.bind(this)} placeholder='search offers by client name' />
        </header>
        <div className='row recruits-container'>
          {
          this.state.recruits.filter((el) => el.clientFullname.toLowerCase().includes(this.state.recruiterToFind.toLowerCase())).map((el, i) => {
            return (
              <div key={i} className='card recruiter-card col-xs-12 col-sm-5 col-md-5 col-lg-5'>
                <div className='card-header'>
                  <h4>{el.clientFullname}</h4>
                </div>
                <div className='card-body'>
                  <h5 className='card-title'><i className='fa fa-building' /> {el.companyName}</h5>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item'><i className='fa fa-phone' /> {el.clientPhone}</li>
                    <li className='list-group-item'><i className='fa fa-envelope' /> {el.clientMail}</li>
                    <li className='list-group-item'><i className='fa fa-link' /> {el.companyWebsite}</li>
                  </ul>
                  <div className='jumbotron jumbotron-fluid'>
                    <p>{el.clientMsg}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
        </div>
      </div>
    )
  }
}

export default RecruitsToDisplay
