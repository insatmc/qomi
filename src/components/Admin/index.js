import React, {Component} from 'react'
import './style.css'
import StudentsList from '../StudentsList'
import Search from '../Search'
import TableUser from '../TableUser'
import RecruitsToDisplay from '../RecruitsToDisplay'
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
      studentsForTabUser: [],
  		nameFilter: '',
  		locationFilter: '',
  		skillsFilter: '',
      loggedIn: false,
      username: '',
      password: ''
  	}

    if (window.localStorage.loggedIn) {
      this.state.loggedIn = true
    }

    this.deleteUser = this.deleteUser.bind(this)
    this.intitStudents = this.intitStudents.bind(this)
    this.UpdateUser = this.UpdateUser.bind(this)
    this.logout = this.logout.bind(this)
    this.login = this.login.bind(this)
    this.sortStudentsByVerification = this.sortStudentsByVerification.bind(this)
    this.adminStudentSearch = this.adminStudentSearch.bind(this)
    this.intitStudents()
  }

  logout () {
    window.localStorage.removeItem('loggedIn')

    this.setState({
      loggedIn: false
    })
  }

  login () {
    axios.post('/login', { username: this.state.username, password: this.state.password }).then((data) => {
      window.localStorage.loggedIn = data.data
      this.setState({
        loggedIn: true
      })
    }).catch(function (error) {
      alert('Something went wrong')
    })
  }

  intitStudents () {
    axios.get('/api/students').then((data) => {
      this.setState({
        students: data.data,
        studentsForTabUser: data.data
      })
    }).catch(function (error) {
      alert('Something went wrong')
    })
  }
  onAddUser (e) {
    axios.post('/api/students', { ...e}).then((data) => {
      // TODO: fix hack, only add new user to students once the server returns it
      this.intitStudents()
    }).catch(function (error) {
      alert('Something went wrong')
    })
  }
  deleteUser (student) {
    axios.delete(`/api/students/${student._id}`)
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
      ...student
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

  sortStudentsByVerification (e) {
    let value = e.target.value.toLowerCase()
    if (value == 'all') {
      this.setState({
        studentsForTabUser: this.state.students.map(student => student)
      })
    } else if (value == 'verified') {
      this.setState({
        studentsForTabUser: this.state.students.filter(student => student.verification == 'verified')
      })
    } else if (value == 'unverified') {
      this.setState({
        studentsForTabUser: this.state.students.filter(student => student.verification == 'unverified')
      })
    }
  }

  adminStudentSearch (e) {
    let value = e.target.value.toLowerCase()
    if (value === '') {
      this.setState({
        studentsForTabUser: this.state.students.map(student => student)
      })
    } else {
      this.setState({
        studentsForTabUser: this.state.students.filter(student => student.fullName.toLowerCase().includes(value))
      })
    }
  }

  render () {
    return (
      <div>
        <Router>
          <Switch>
            <Route path='/admin/recruitment-suggestions' render={() => {
              return (
                <div>
                  {
                    this.state.loggedIn &&
                    <RecruitsToDisplay />
                  }
                  {
                    !this.state.loggedIn &&
                    <div>
                    If you are an admin
                    <Link to='/admin'>login as an admin</Link>
                    </div>
                  }
                </div>
              )
            }
            } />

            <Route path='/' render={
                () => {
                  return (
                    <div>
                      {
                      this.state.loggedIn &&
                      <TableUser
                        students={this.state.studentsForTabUser}
                        onAddUser={(e) => this.onAddUser(e)}
                        onDeleteUser={this.deleteUser}
                        onUpdateUser={this.UpdateUser}
                        onLogout={this.logout}
                        sortStudentsByVerification={this.sortStudentsByVerification}
                        adminStudentSearch={this.adminStudentSearch} />
                    }
                      {
                      !this.state.loggedIn &&
                      <div className='loginHolder'>
                        <div className='admin-login' > {/* send request to /api/login and save the token in window.localStorage.token */ }
                          <div className='login-inputs'>
                            <h1>Login</h1>
                            <div className='form-group'>
                              <input id='username-input'
                                className='form-control'
                                placeholder='username'
                                onChange={(e) => this.setState({
                                  username: e.target.value
                                })
                              }
                              />
                            </div>
                            <div className='form-group'>
                              <input id='login-input'
                                className='form-control'
                                placeholder='password'
                                onChange={(e) => this.setState({
                                  password: e.target.value
                                })
                                }
                                type='password'
                              />
                            </div>
                            <div className='form-group login-btn'>
                              <button className='btn btn-success' onClick={this.login}>Go</button>
                            </div>
                          </div>
                        </div>
                        <div className='made-with'>
                          Made with <span>♥</span> in GMC HackerSpace
                        </div>
                      </div>
                    }

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

export default Admin
