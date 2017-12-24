import React, {Component} from 'react'
import StudentsList from '../StudentsList'
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
    		<StudentsList students={this.state.students} />
  		)
  }

}

export default App
