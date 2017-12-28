import React, {Component} from 'react'

class studentSkill extends Component {
  render () {
    let skill = this.props.skill
    let divStyle = {
      marginRight: '5px',
      color: 'tomato',
      fontWeight: '600'
    }
    return (
      <span style={divStyle}>{skill}</span>
    )
  }
}

export default studentSkill
