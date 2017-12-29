import React, {Component} from 'react'
import './style.css'
import 'src/assets/stylesheets/base.scss'
import NavBar from '../NavBar'
import MyTabs from '../MyTabs'
import StudentsList from '../StudentsList'
import Search from '../Search'
import SearchTags from '../SearchTags'
import PropTypes from 'prop-types'
import TableUser from '../TableUser'
import Admin from '../Admin'
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
      skillsTag: [],
      lookingForTag: ''
    }

    axios.get('/api/students').then((data) => {
      this.setState({ students: data.data })
    }).catch(function (error) {
      console.log(JSON.stringify(error))
    })
  }

  isStudentVisible (student) {
    console.log(student)
    let studentName = student.fullName.toLowerCase() || ''
    let nameToSearch = this.state.nameFilter.toLowerCase()

    let studentLocation = student.location.toLowerCase()
    let locationToSearch = this.state.locationFilter.toLowerCase()

    let studentSkills = student.skills.map((el) => el.toLowerCase())
    let skillsToSearch = this.state.skillsFilter.map((el) => el.toLowerCase())

    let studentDisponibility = student.disponibility.toLowerCase()
    let disponibilityToSearch = this.state.disponibilityFilter.toLowerCase()

    let studentContract = student.lookingFor.toLowerCase()
    let contractFilter = this.state.contractFilter.toLowerCase()

    let nameCond = (studentName.indexOf(nameToSearch) !== -1)
    let locationCond = (studentLocation.indexOf(locationToSearch) !== -1)
    let skillsCond = studentSkills.some(el => skillsToSearch.includes(el))
    if (skillsToSearch.length === 0) {
      skillsCond = true
    }
    let disponibilityCond = (studentDisponibility.indexOf(disponibilityToSearch) !== -1)
    let contractCond = (studentContract.indexOf(contractFilter) !== -1)

    let userSearch = this.state.userSearch.toLowerCase()
    let userCond = (studentName.indexOf(userSearch) !== -1)

    return (nameCond && locationCond && skillsCond && disponibilityCond && contractCond && userCond)
  }

  removeTag (myVal) {
    let typeVal = myVal.el.type
    console.log('the type value is ================> ', typeVal)
    if (typeVal === 'location') {
      this.setState({
        locationFilter: '',
        locationTag: ''
      })
    } else if (typeVal === 'disponibility') {
      this.setState({
        disponibilityFilter: '',
        disponibilityTag: ''
      })
    } else if (typeVal === 'lookingFor') {
      this.setState({
        contractFilter: '',
        lookingForTag: ''
      })
    }
  }

  removeSkill (myVal) {
    let typeVal = myVal
    if (this.state.skillsFilter.indexOf(typeVal) !== -1) {
      let indInFilter = this.state.skillsFilter.indexOf(typeVal)
      let indInTag = this.state.skillsTag.indexOf(typeVal)
      this.setState({
        skillsFilter: this.state.skillsFilter.filter((el, i) => i !== indInFilter),
        skillsTag: this.state.skillsTag.filter((el, i) => i !== indInTag)
      })
    }
  }
  render () {
  		return (
    <div>
      <Router>
        <Switch>
          <Route path='/admin' render={() =>
            <div>
              <Admin />
            </div>
              } />
          <Route path='/' render={
                () => {
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
                            skillsTag={this.state.skillsTag}
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
                                skillsTag: this.state.skillsTag.concat(e.target.value)}
                            )}
                            onChangeContract={(e) => this.setState({contractFilter: e.target.value, lookingForTag: e.target.value})}
                          />
                        </div>
                        <StudentsList students={this.state.students.filter(this.isStudentVisible.bind(this))} />
                      </div>
                    </div>
                  )
                }
              } />

        </Switch>
      </Router>
    </div>

  		)
  }
}

export default App
