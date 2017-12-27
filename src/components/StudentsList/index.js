import React, {Component} from 'react'
import './style.css'
import StudentCard from '../StudentCard'

class StudentsList extends Component {

  render () {
    return (
      <div className='row Cards-container'>

        {
        this.props.students.map((el, i) => {
          return <StudentCard key={i} student={el} />
        })
      }

      </div>
    )
  }
}

export default StudentsList
