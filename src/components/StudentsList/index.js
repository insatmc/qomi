import React, {Component} from 'react'
import StudentCard from '../StudentCard'

class StudentsList extends Component {

  render () {
    return (
      <div className='row'>

        {
        this.props.students.map((el,i) => {
          return <div key={i} className='col-sm-6 col-md-4 col-lg-3'><StudentCard  student={el} /></div>
        })
      }

      </div>
    )
  }
}

export default StudentsList
