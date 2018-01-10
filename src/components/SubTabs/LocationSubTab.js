import React, {Component} from 'react'
import './LocationSubTab.css'
import axios from 'axios'

class LocationSubTab extends Component {
  constructor (props) {
    super(props)
    this.state = {
      locations: []
    }
    console.log("CD")

  }

  componentDidMount () {
    console.log("CDM")
    axios.get('/api/students', {
      validateStatus: function (status) {
        return status < 400 // Reject only if the status code is greater than or equal to 500
      }
    }).then((data) => {
      console.log('for students location====>', data)
      let students = data.data
      let locations = students.map((el) => el.location)
      this.setState({
        locations: locations.filter((item, pos) => locations.indexOf(item) == pos)
      })
    }).catch(function (error) {
    })
  }

  render () {
    return (
      <div className='input-container'>
        {
          this.state.locations.map((location, i) => {
            return (
              <div key={i}>
                <input onClick={this.props.onChangeLocation} className='filter-input location-input' type='button' value={location} />
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default LocationSubTab
