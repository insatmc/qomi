import React, {Component} from 'react'
import './style.css'

class studentSkill extends Component {
  render () {
    let skill = this.props.skill
    return (
      <span className='skill-container'>{skill}</span>
    )
  }
}

export default studentSkill
