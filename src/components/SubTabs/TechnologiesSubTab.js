import React, {Component} from 'react'
import './TechnologiesSubTab.css'

class TechnologiesSubTab extends Component {
  render () {
    return (
      <div className='techno-container'>
        <input onClick={this.props.onChangeSkills} className='techno-input' type='button' value='HTML' /><br />
        <input onClick={this.props.onChangeSkills} className='techno-input' type='button' value='CSS' /><br />
        <input onClick={this.props.onChangeSkills} className='techno-input' type='button' value='Javascript' /><br />
        <input onClick={this.props.onChangeSkills} className='techno-input' type='button' value='Bootstrap' /><br />
        <input onClick={this.props.onChangeSkills} className='techno-input' type='button' value='Responsive Design' /><br />
        <input onClick={this.props.onChangeSkills} className='techno-input' type='button' value='ReactJS' /><br />
        <input onClick={this.props.onChangeSkills} className='techno-input' type='button' value='AngularJS' /><br />
        <input onClick={this.props.onChangeSkills} className='techno-input' type='button' value='VueJS' /><br />
        <input onClick={this.props.onChangeSkills} className='techno-input' type='button' value='React Native' /><br />
        <input onClick={this.props.onChangeSkills} className='techno-input' type='button' value='NodeJS' /><br />
        <input onClick={this.props.onChangeSkills} className='techno-input' type='button' value='ExpressJS' /><br />
        <input onClick={this.props.onChangeSkills} className='techno-input' type='button' value='MongoDB' /><br />
        <input onClick={this.props.onChangeSkills} className='techno-input' type='button' value='MeteorJS' /><br />
        <input onClick={this.props.onChangeSkills} className='techno-input' type='button' value='Ruby on Rails' /><br />
        <input onClick={this.props.onChangeSkills} className='techno-input' type='button' value='.NET' /><br />
        <input onClick={this.props.onChangeSkills} className='techno-input' type='button' value='Java' /><br />
        <input onClick={this.props.onChangeSkills} className='techno-input' type='button' value='Python' /><br />
        <input onClick={this.props.onChangeSkills} className='techno-input' type='button' value='PHP' /><br />
        <input onClick={this.props.onChangeSkills} className='techno-input' type='button' value='Others' /><br />

      </div>
    )
  }
}

export default TechnologiesSubTab
