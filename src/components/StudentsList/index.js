import React, {Component} from 'react'
import './style.css'
import StudentCard from '../StudentCard'

class StudentsList extends Component {

  render () {
    return (
      <div className='Cards-container'>
        {
          this.props.loading &&
          <div className="loading-card">
          </div>
        }
        {
          !this.props.loading && this.props.students.length == 0 &&
          <div className="alert alert-info">
            No corresponding results
          </div>
        }
        {
          !this.props.loading &&
          this.props.students.map((el, i) => {
            return <StudentCard key={i} student={el} />
          })
        }

      </div>
    )
  }
}

export default StudentsList
