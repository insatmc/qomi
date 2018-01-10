import React, {Component} from 'react'
import './TechnologiesSubTab.css'
import axios from 'axios'

class TechnologiesSubTab extends Component {
  constructor (props) {
    super(props)
    this.state = {
      technologies: []
    }
  }

  componentDidMount () {
    axios.get('/api/students', {
      validateStatus: function (status) {
        return status < 400
      }
    }).then((data) => {
      let students = data.data
      let studentsTechnologies = students.map((el) => el.skills)
      let technologies = studentsTechnologies.reduce((acc, el) => acc = acc.concat(el), [])
      this.setState({
        technologies: technologies.filter((item, pos) => technologies.indexOf(item) == pos)
      })
    }).catch(function (error) {
    })
  }

  render () {
    return (
      <div className='input-container'>
        {
          this.state.technologies.map((techno, i) => {
            return (
              <div key={i}>
                <input onClick={this.props.onChangeSkills} className='filter-input techno-input' type='button' value={techno} />
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default TechnologiesSubTab
