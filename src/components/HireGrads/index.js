import React, {Component} from 'react'
import './style.css'
import axios from 'axios'
import swal from 'sweetalert'

class HireGrads extends Component {
  constructor (props) {
    super(props)

    this.state = {
      clientFullname: '',
      clientPhone: '',
      clientMail: '',
      companyName: '',
      companyWebsite: '',
      clientMsg: ''
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.onChangeClientFullname = this.onChangeClientFullname.bind(this)
    this.onChangeClientPhone = this.onChangeClientPhone.bind(this)
    this.onChangeClientMail = this.onChangeClientMail.bind(this)
    this.onChangeCompanyName = this.onChangeCompanyName.bind(this)
    this.onChangeCompanyWebsite = this.onChangeCompanyWebsite.bind(this)
    this.onChangeClientMsg = this.onChangeClientMsg.bind(this)
  }

  onSubmit () {
    axios.post('/api/recruits', (this.state)).then((data) => {
      swal('Thank you for your time!', 'We will contact you soon!', 'success')
    }).catch(function (error) {
      console.log(JSON.stringify(error))
      alert('Something is not going well.Please, retry.')
    })
  }

  onChangeClientFullname (e) {
    this.setState({
      clientFullname: e.target.value
    })
  }

  onChangeClientPhone (e) {
    this.setState({
      clientPhone: e.target.value
    })
  }

  onChangeClientMail (e) {
    this.setState({
      clientMail: e.target.value
    })
  }

  onChangeCompanyName (e) {
    this.setState({
      companyName: e.target.value
    })
  }

  onChangeCompanyWebsite (e) {
    this.setState({
      companyWebsite: e.target.value
    })
  }

  onChangeClientMsg (e) {
    this.setState({
      clientMsg: e.target.value
    })
  }

  render () {
    return (
      <div className='hiring-form-container'>
        <h2>Hire Our Grads</h2>
        <h5>Get in touch with Us</h5>
        <div className='the-form'>
          <div className='input-container'>
            <input id='client-fullname' placeholder='Full-name' type='text' onChange={this.onChangeClientFullname} required />
          </div>

          <div className='input-container'>
            <input id='client-phone' type='text' placeholder='Phone' onChange={this.onChangeClientPhone} required />
          </div>

          <div className='input-container'>
            <input id='client-mail' type='text' placeholder='Mail' onChange={this.onChangeClientMail} required />
          </div>

          <div className='input-container'>
            <input id='company-name' type='text' placeholder='Company name' onChange={this.onChangeCompanyName} required />
          </div>

          <div className='input-container'>
            <input id='company-website' type='text' placeholder='Company website' onChange={this.onChangeCompanyWebsite} required />
          </div>

          <div className='input-container'>
            <textarea id='client-message' placeholder='projects, technologies...' onChange={this.onChangeClientMsg} required />
          </div>

          <div className='input-container submit-btn-container'>
            <input id='client-submit-button' type='submit' value='Submit' onClick={this.onSubmit} required />
          </div>
        </div>

      </div>
    )
  }
}

export default HireGrads
