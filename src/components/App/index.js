import React, {Component} from 'react'
import PropTypes from 'prop-types'
import StudentCard from '../StudentCard'
import 'src/assets/stylesheets/base.scss'

import StudentsList from '../StudentsList'

class App extends Component {
<<<<<<< HEAD
  constructor (props) {
    super(props)
    this.state = {
      student: {
        src: 'avatar.jpg',
        fullname: 'Baligh Hamdi',
        location: 'Tunis',
        disponibility: 'Immediatly',
        lookingFor: 'Internship',
        skills: ['#HTML', '#CSS', '#JAVASCRIPT']
      }
    }
  }
  	render () {
  		return (
    <StudentCard student={this.state.student} />
  		)
  }
};

export default App
=======

  	render(){
  		return (
    		<StudentsList />
  		)
	}

}


export default App;
>>>>>>> ce077e5232e645cc4cd69217d4faf058f4eb2ceb
