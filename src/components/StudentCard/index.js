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
          <div className='student-image-elem' style={{backgroundImage: `url(${student.image})`}} />
        </div>

        <div className='student-name'>
          {student.fullName}
        </div>

        <div className='student-location'>
          <div className='student-info'>{student.location}</div>
        </div>

        <div className='student-disponibility-and-lookingFor-container'>

          <hr className='hr-style' />
          <div className='student-disponibility'>
            <div className='student-info-title'>Disponibility</div>
            <div className='student-info-disponibility'>{student.disponibility}</div>
          </div>

          <div className='student-lookingFor'>
            <div className='student-info-title'>Looking for</div>
            <div className='student-info'>
              {
              student.lookingFor.slice(0, 3).map((el, i) => <span className='lookingFor-container' key={i}>{el}</span>)
            }
            </div>
          </div>

        </div>

        <div className='student-skills'>
          <div className='student-info'>
            {
            student.skills.slice(0, 3).map((el, i) => <StudentSkill key={i} skill={el} />)
          }
          </div>
        </div>

        <div className='student-cv'>
          <a target='_blank' href={student.cv}>
            View CV
          </a>
        </div>

        <div className='student-social-icon icons-container'>
          <a className='student-social-icon' rel='publisher' target='_blank' href={student.contacts.github}>
            <i className='fa fa-github-square fa-2x' />
          </a>

          {
            (student.contacts.linkedin !== '') &&
            <a className='student-social-icon' rel='publisher' target='_blank' href={student.contacts.linkedin}>
              <i className='fa fa-linkedin-square fa-2x' />
            </a>
          }

          <a className='student-social-icon' rel='publisher' target='_blank' href={'mailto:' + student.contacts.mail}>
            <i className='fa fa-google-plus-square fa-2x' />
          </a>

          {
            (student.contacts.twitter !== '') &&
            <a className='student-social-icon' rel='publisher' target='_blank' href={student.contacts.twitter}>
              <i className='fa fa-twitter-square fa-2x' />
            </a>
          }

        </div>

      </div>
    )
  }
}

export default StudentCard
