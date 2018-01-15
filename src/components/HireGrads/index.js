import React, {Component} from 'react'
import './style.css'

class HireGrads extends Component {
  render () {
    return (
      <div className='hiring-form-container'>
        <h2>Hire Our Grads</h2>
        <form>
          <div>
            <input id='client-fullname' type='text' placeholder='add your fullname' required />
          </div>

          <div>
            <input id='company-name' type='text' placeholder='add company name' required />
          </div>

          <div>
            <input id='company-website' type='text' placeholder='add your company website' required />
          </div>

          <div>
            <textarea id='client-message' placeholder='add a message (your project, what technologies you use...)' required />
          </div>

          <div>
            <input id='client-submit-button' type='button' value='Submit your application' required />
          </div>

        </form>
      </div>
    )
  }
}

export default HireGrads
