import React, {Component} from 'react'
import './style.css'
import StudentCard from '../StudentCard'

class StudentsList extends Component {

  render () {
    return (
      <div className='row Cards-container'>

        {
        this.props.students.map((el, i) => {
          return <div key={i} className='col-sm-6 col-md-6 col-lg-4'><StudentCard student={el} /></div>
        })
      }

      </div>
    )
  }
}

export default StudentsList
