import React, {Component} from 'react'
import './style.css'
import 'src/assets/stylesheets/base.scss'
import NavBar from '../NavBar'
import MyTabs from '../MyTabs'
import StudentsList from '../StudentsList'
import Search from '../Search'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import axios from 'axios'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { students: [],
      nameFilter: '',
  		locationFilter: '',
  		skillsFilter: ''
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
    let studentToSearch = this.state.locationFilter.toLowerCase()
    let studentSkills = student['looking for'].toLowerCase()
    let skillsToSeach = this.state.skillsFilter.toLowerCase()
    return ((studentName.indexOf(nameToSearch) !== -1) || (studentLocation.indexOf(studentToSearch) !== -1) || (studentSkills.indexOf(skillsToSeach) !== -1))
  }

  render () {
    return (
      <div>
        <NavBar />
        <div className='row bars-container'>

          <div className='col-xs-12 col-md-4 col-lg-4 user-search'>
            <Search
              name={this.state.nameFilter}
              onChangeName={(e) => this.setState({nameFilter: e.target.value})}
              onChangeLocation={(e) => this.setState({locationFilter: e.target.value})}
              onChangeSkills={(e) => this.setState({skillsFilter: e.target.value})}
            />
          </div>

          <div className='col-xs-12 col-md-8 col-lg-8 search-tags'>
            your Searches
          </div>

        </div>
        <div className='Tabs-Cards-container'>
          <div className='Tabs-container'>
            <MyTabs />
          </div>
          <StudentsList students={this.state.students.filter(this.isStudentVisible.bind(this))} />
        </div>
      </div>
  		)
  }

}

export default App
