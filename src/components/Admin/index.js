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
  		nameFilter: '',
  		locationFilter: '',
  		skillsFilter: '',
      loggedIn: false,
      username: '',
      password: ''
  	}

    if (window.localStorage.token) {
      this.state.loggedIn = true
    }

    this.deleteUser = this.deleteUser.bind(this)
    this.intitStudents = this.intitStudents.bind(this)
    this.UpdateUser = this.UpdateUser.bind(this)
    this.logout = this.logout.bind(this)
    this.login = this.login.bind(this)
    this.intitStudents()
  }

  logout () {
    this.setState({
      loggedIn: false
    })
  }

  login () {
    console.log('not implemented yet')
    axios.post('/api/login', { username: this.state.username, password: this.state.password }).then((data) => {
      window.localStorage.token = data.data
      this.setState({
        loggedIn: true
      })
    }).catch(function (error) {
      alert('Something went wrong')
    })
  }

  intitStudents () {
    axios.get('/api/students').then((data) => {
      this.setState({ students: data.data })
    }).catch(function (error) {
      alert('Something went wrong')
    })
  }
  onAddUser (e) {
    axios.post('/api/students', { ...e, token: window.localStorage.token }).then((data) => {
      // TODO: fix hack, only add new user to students once the server returns it
      this.intitStudents()
    }).catch(function (error) {
      alert('Something went wrong')
    })
  }
  deleteUser (student) {
    axios.delete(`/api/students/${student._id}?token=${window.localStorage.token}`)
      .then(() => {
        this.setState({
          students: this.state.students.filter(el => el._id != student._id)
        })
      })
      .catch(function (error) {
        alert('Something went wrong')
      })
  }
  UpdateUser (student) {
    let studentWithoutId = {
      ...student,
      token: window.localStorage.token
    }
    delete studentWithoutId._id
    console.log()
    axios.put(`/api/students/${student._id}`, studentWithoutId)
      .then(() => {
        this.intitStudents()
      })
      .catch(function (error) {
        alert('Something went wrong')
      })
  }

  render () {
  		return (
    <div>
      {
      this.state.loggedIn &&
      <TableUser
        students={this.state.students}
        onAddUser={(e) => this.onAddUser(e)}
        onDeleteUser={this.deleteUser}
        onUpdateUser={this.UpdateUser}
        onLogout={this.logout} />
    }
      {
      !this.state.loggedIn &&
      <div className='login-form' > {/* send request to /api/login and save the token in window.localStorage.token */ }
        <input id='username-input'
          onChange={(e) => this.setState({
            username: e.target.value
          })
        }
        />
        <input id='login-input'
          onChange={(e) => this.setState({
            password: e.target.value
          })
          }
          type='password'
        />
        <button onClick={this.login}>Go</button>
      </div>
    }

    </div>
  		)
  }
}

export default Admin
