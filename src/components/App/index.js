import React, {Component} from 'react'
import StudentsList from '../StudentsList'
import Search from '../Search'
import TableUser from '../TableUser'
import PropTypes from 'prop-types'
import 'src/assets/stylesheets/base.scss'
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

    this.state = {
      students: [],
  		nameFilter :'',
  		locationFilter : '',
  		skillsFilter :''
  	}

    this.deleteUser = this.deleteUser.bind(this)

    axios.get('http://localhost:8080/api/students').then((data) => {
      this.setState({ students: data.data })
    }).catch(function (error) {
      alert('Something went wrong')
    })
  }
  onAddUser(e){
    console.log("works", e)
    axios.post('http://localhost:8080/api/students', e).then((data) => {
      console.log("incoming new user", data)
      this.setState({
        students: this.state.students.concat(e)
      })
    }).catch(function (error) {
      alert('Something went wrong')
    })
  }
  deleteUser(student){
    axios.delete(`http://localhost:8080/api/students/${student._id}`)
      .then(() => {
        this.setState({
          students: this.state.students.filter(el => el._id != student._id)
        })
      })
      .catch(function (error) {
        alert('Something went wrong')
      })
  }
	isStudentVisible(student){
		// let studentName = student.fullName.toLowerCase()
		// let nameToSearch = this.state.nameFilter.toLowerCase()
		// let studentLocation = student.location.toLowerCase()
		// let studentToSearch = this.state.locationFilter.toLowerCase()
		// let studentSkills = student.skills.toLowerCase()
		// let skillsToSeach = this.state.skillsFilter.toLowerCase()
		// return ((studentName.indexOf(nameToSearch)!==-1) || (studentLocation.indexOf(studentToSearch )!==-1)|| (studentSkills.indexOf(skillsToSeach)!==-1))
	}
  render () {
  		return (
				<div>
          <Router>
            <Switch>
              <Route path="/admin" render={() =>
                <div>
                  <TableUser
                    students={this.state.students}
                    onAddUser={(e) => this.onAddUser(e)}
                    onDeleteUser={this.deleteUser}/>
                </div>
              }/>
              <Route path="/" render={
                () => {
                  return (
                    <div>
                      <Link to="/admin">Admin</Link>

                      <Search
                        name={this.state.nameFilter}
                        onChangeName={(e) => this.setState({nameFilter: e.target.value})}
                        onChangeLocation={(e)=>this.setState({locationFilter:e.target.value})}
                        onChangeSkills={(e)=>this.setState({skillsFilter:e.target.value})}/>
                      <StudentsList students={this.state.students.filter(this.isStudentVisible.bind(this))}/>
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
