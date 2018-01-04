import React, {Component} from 'react'
import './StudentCard.css'
import StudentSkill from '../StudentSkill'

class StudentCard extends Component {
  render () {
    let student = this.props.student
    console.log('student in student card is ', student)
    return (
      <div className='student-card'>

        <div className='student-image'>
          <img alt='student-image' src={student.image} />
        </div>

        <div className='student-name'>
          {student.fullName}
        </div>

        <div className='student-location'>
          <h6>Location:</h6>
          <div className='student-info'>{student.location}</div>
        </div>

        <div className='student-disponibility'>
          <h6>Disponibility:</h6>
          <div className='student-info'>{student.disponibility}</div>
        </div>

        <div className='student-lookingFor'>
          <h6>Looking for:</h6>
          <div className='student-info'>
            {
            student.lookingFor.map((el, i) => <span className='lookingFor-container' key={i}>{el}</span>)
          }
          </div>
        </div>

        <div className='student-skills'>
          <h6>Skills:</h6>
          <div className='student-info'>
            {
            student.skills.map((el, i) => <StudentSkill key={i} skill={el} />)
          }
          </div>
        </div>

        <div className='student-social-icon'>
          <a className='student-social-icon' rel='publisher' target='_blank' href={student.contacts.github}>
            <i className='fa fa-github-square fa-2x' />
          </a>
          <a className='student-social-icon' rel='publisher' target='_blank' href={student.contacts.linkedin}>
            <i className='fa fa-linkedin-square fa-2x' />
          </a>
          <a className='student-social-icon' rel='publisher' target='_blank' href={student.contacts.mail}>
            <i className='fa fa-google-plus-square fa-2x' />
          </a>
          <a className='student-social-icon' rel='publisher' target='_blank' href={student.contacts.twitter}>
            <i className='fa fa-twitter-square fa-2x' />
          </a>
        </div>

        <div className='student-cv'>
          <a target='_blank' href={student.cv}>
            View CV
          </a>
        </div>

      </div>
    )
  }
}

export default StudentCard
