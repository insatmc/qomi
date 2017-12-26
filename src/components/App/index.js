import React, {Component} from 'react'
import './style.css'
import NavBar from '../NavBar'
import MyTabs from '../MyTabs'
import StudentsList from '../StudentsList'
import SearchBar from '../SearchBar/SearchBar.js'
import PropTypes from 'prop-types'
import 'src/assets/stylesheets/base.scss'
import axios from 'axios'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { students: [] }
    axios.get('http://localhost:8080/api/students').then((data) => {
      this.setState({ students: data.data })
    }).catch(function (error) {
      alert('Something went wrong')
    })
  }
  render () {
    return (
      <div>
        <NavBar />
        <SearchBar />
        <div className='Tabs-Cards-container'>
          <div className='Tabs-container'>
            <MyTabs />
          </div>
          <StudentsList students={this.state.students} />
        </div>
      </div>
  		)
  }

}

export default App
