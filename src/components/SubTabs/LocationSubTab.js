import React, {Component} from 'react'
import './LocationSubTab.css'

class LocationSubTab extends Component {
  constructor (props) {
    super(props)
    this.state = {
      locations: [
        'Beja',
        'Bizerte',
        'Gabes',
        'Gafsa',
        'Grand Tunis',
        'Jendouba',
        'Kairouan',
        'Kasserine',
        'Kebili',
        'Kef',
        'Mahdia',
        'Medenine',
        'Monastir',
        'Nabeul',
        'Sfax',
        'Sidi Bouzid',
        'Siliana',
        'Sousse',
        'Tataouine',
        'Tozeur',
        'Zaghouan',
        'Outside Tunisia'
      ]
    }
  }
  render () {
    return (
      <div className='locations'>
        {
          this.state.locations.map((location, i) => {
            return (
              <div key={i}>
                <input onClick={this.props.onChangeLocation} className='location-input' type='button' value={location} />
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default LocationSubTab
