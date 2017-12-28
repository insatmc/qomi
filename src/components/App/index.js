import React, {Component} from 'react'
import './style.css'
import 'src/assets/stylesheets/base.scss'
import NavBar from '../NavBar'
import MyTabs from '../MyTabs'
import StudentsList from '../StudentsList'
import Search from '../Search'
import SearchTags from '../SearchTags'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import axios from 'axios'
import _ from 'lodash'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      students: [],
      userSearch: '',
      nameFilter: '',
  		locationFilter: '',
  		skillsFilter: [],
      disponibilityFilter: '',
      contractFilter: '',
      locationTag: '',
      disponibilityTag: '',
      technologiesTag: [],
      lookingForTag: ''
    }

    axios.get('http://localhost:8080/api/students').then((data) => {
      this.setState({ students: data.data })
    }).catch(function (error) {
      alert('Something went wrong')
    })
  }

  isStudentVisible (student) {
    let studentName = student.fullname.toLowerCase()
    let nameToSearch = this.state.nameFilter.toLowerCase()

    let studentLocation = student.location.toLowerCase()
    let locationToSearch = this.state.locationFilter.toLowerCase()

    let studentSkills = student.technologies.map((el) => el.toLowerCase())
    let skillsToSearch = this.state.skillsFilter.map((el) => el.toLowerCase())

    let studentDisponibility = student.disponibility.toLowerCase()
    let disponibilityToSearch = this.state.disponibilityFilter.toLowerCase()

    let studentContract = student['looking for'].toLowerCase()
    let contractFilter = this.state.contractFilter.toLowerCase()

    let nameCond = (studentName.indexOf(nameToSearch) !== -1)
    let locationCond = (studentLocation.indexOf(locationToSearch) !== -1)
    let skillsCond = _
    if (skillsToSearch.length === 0) {
      skillsCond = true
    }
    let disponibilityCond = (studentDisponibility.indexOf(disponibilityToSearch) !== -1)
    let contractCond = (studentContract.indexOf(contractFilter) !== -1)

    let userSearch = this.state.userSearch.toLowerCase()
    let userCond = (studentName.indexOf(userSearch) !== -1)

    return (nameCond && locationCond && skillsCond && disponibilityCond && contractCond && userCond)
  }

  removeTag (myVal, valIndex) {
    // console.log('clicked and myVal and valIndex are ======>', myVal.el, valIndex.i)
    // if (valIndex.i === 0 && myVal.el === this.state.locationFilter) {
    //   this.setState({
    //     locationFilter: '',
    //     locationTag: ''
    //   })
    // }
  }

  removeSkill (myVal, valIndex) {

  }

  render () {
    return (

      <div>
        <NavBar />
        <div className='row bars-container'>

          <div className='col-xs-12 col-md-4 col-lg-4 user-search'>
            <Search
              onChangeSearch={(e) => this.setState({userSearch: e.target.value})}
            />
          </div>

          <div className='col-xs-12 col-md-8 col-lg-8 search-tags'>
            <SearchTags tags={
              [
                {
                  type: 'location', value: this.state.locationTag
                },
                {
                  type: 'disponibility', value: this.state.disponibilityTag
                },
                {
                  type: 'lookingFor', value: this.state.lookingForTag
                }
              ]
              }
              removeTag={this.removeTag.bind(this)}
              technologiesTag={this.state.technologiesTag}
              removeSkill={this.removeSkill.bind(this)}
            />
          </div>

        </div>
        <div className='Tabs-Cards-container'>
          <div className='Tabs-container'>
            <MyTabs
              onChangeLocation={(e) => this.setState({locationFilter: e.target.value, locationTag: e.target.value})}
              onChangeDisponibility={(e) => this.setState({disponibilityFilter: e.target.value, disponibilityTag: e.target.value})}
              onChangeSkills={(e) => this.setState(
                {skillsFilter: this.state.skillsFilter.concat(e.target.value),
                  technologiesTag: this.state.technologiesTag.concat(e.target.value)}
              )}
              onChangeContract={(e) => this.setState({contractFilter: e.target.value, lookingForTag: e.target.value})}
            />
          </div>
          <StudentsList students={this.state.students.filter(this.isStudentVisible.bind(this))} />
        </div>
      </div>
  		)
  }

}

export default App
