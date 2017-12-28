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


class Admin extends Component {
  constructor (props) {
    super(props)

    this.state = {
      students: [],
  		nameFilter :'',
  		locationFilter : '',
  		skillsFilter :''
  	}

    this.deleteUser = this.deleteUser.bind(this)
    this.intitStudents = this.intitStudents.bind(this)
    this.UpdateUser = this.UpdateUser.bind(this)


    this.intitStudents()
  }
  intitStudents() {
    axios.get('http://localhost:8080/api/students').then((data) => {
      this.setState({ students: data.data })
    }).catch(function (error) {
      alert('Something went wrong')
    })
  }
  onAddUser(e){
    axios.post('http://localhost:8080/api/students', e).then((data) => {
      // TODO: fix hack, only add new user to students once the server returns it
      this.intitStudents()
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
  UpdateUser(student){
    let studentWithoutId = {
      ...student
    }
    delete studentWithoutId._id
    console.log()
    axios.put(`http://localhost:8080/api/students/${student._id}`, studentWithoutId)
      .then(() => {
        this.setState({
          students: this.state.students.filter(el => el._id != student._id)

        })
      })
      .catch(function (error) {
        alert('Something went wrong')
      })
  }

  render () {
  		return (
          <div>
            <TableUser
              students={this.state.students}
              onAddUser={(e) => this.onAddUser(e)}
              onDeleteUser={this.deleteUser}
              onUpdateUser={this.UpdateUser}/>
          </div>
  		)
  }
}

export default Admin
