import React, {Component} from 'react'
import './style.css'

class HireGrads extends Component {
  render () {
    return (
      <div className='hiring-form-container'>
        <h2>Hire Our Grads</h2>
        <h5>Get in touch with Us</h5>
        <form>
          <div className='input-container'>
            <input id='client-fullname' placeholder='Full-name' type='text' required />
          </div>

          <div className='input-container'>
            <input id='client-phone' type='text' placeholder='Phone' required />
          </div>

          <div className='input-container'>
            <input id='company-name' type='text' placeholder='Company name' required />
          </div>

          <div className='input-container'>
            <input id='company-website' type='text' placeholder='Company website' required />
          </div>

          <div className='input-container'>
            <textarea id='client-message' placeholder='projects, technologies...' required />
          </div>

          <div className='input-container'>
            <input id='client-submit-button' type='submit' value='Submit' required />
          </div>

        </form>
      </div>
    )
  }
}

export default HireGrads
