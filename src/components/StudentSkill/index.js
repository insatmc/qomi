import React, {Component} from 'react'
import './style.css'

class studentSkill extends Component {
  render () {
    let skill = this.props.skill
    let divStyle = {
      marginRight: '5px',
      color: 'tomato',
      fontWeight: '600'
    }
    return (
      <span className='skill-container' style={divStyle}>{skill}</span>
    )
  }
}

export default studentSkill
