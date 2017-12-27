import React, {Component} from 'react'
import './LocationSubTab.css'

class LocationSubTab extends Component {
  constructor (props) {
    super(props)
    this.state = {
      locations: [
        'Ariana',
        'Beja',
        'Ben Arous',
        'Bizerte',
        'Gabes',
        'Gafsa',
        'Jendouba',
        'Kairouan',
        'Kasserine',
        'Kebili',
        'Kef',
        'Mahdia',
        'Manouba',
        'Medenine',
        'Monastir',
        'Nabeul',
        'Sfax',
        'Sidi Bouzid',
        'Siliana',
        'Sousse',
        'Tataouine',
        'Tozeur',
        'Tunis',
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
                <input className='location-input' type='button' value={location} />
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default LocationSubTab
