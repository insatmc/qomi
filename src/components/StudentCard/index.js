import React, {Component} from 'react'
import './StudentCard.css'
import StudentSkill from '../StudentSkill'

class StudentCard extends Component {
  render () {
    let student = this.props.student
    console.log('student in student card is ', student)
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div>

              <div className='card hovercard'>
                <div className='cardheader' />
                <div className='avatar'>
                  <img alt='student-image' src={student.image} />
                </div>
                <div className='info'>
                  <div className='title'>
                    <h2>{student.fullName}</h2>
                  </div>
                  <hr className='hr-style1' />
                  <div className='desc'><h5>Location:</h5>{student.location}</div>
                  <div className='desc'><h5>Disponibility:</h5>{student.disponibility}</div>
                  <div className='desc'><h5>Looking For:</h5>
                    {
                    student.lookingFor.map((el, i) => <span className='lookingFor-container' key={i}>{el}</span>)
                  }
                  </div>
                  <div className='desc'>
                    <h5>Skills:</h5>
                    <div>
                      {
                        student.skills.map((el, i) => <StudentSkill key={i} skill={el} />
                        )
                      }
                    </div>
                  </div>
                  <hr className='hr-style2' />
                </div>
                <div className='bottom'>
                  <a className='fa fa-facebook social-icon' rel='publisher' target='_blank' href='https://www.facebook.com/gomycode' />

                  <a className='btn btn-primary btn-twitter btn-sm' target='_blank' href={student.contacts.twitter}>
                    <i className='fa fa-twitter' />
                  </a>
                  <a className='btn btn-danger btn-sm' rel='publisher'
                    target='_blank' href={student.contacts.mail}>
                    <i className='fa fa-google-plus' />
                  </a>
                  <a className='btn btn-secondary btn-sm ' rel='publisher'
                    target='_blank' href={student.contacts.github}>
                    <i className='fa fa-github' />
                  </a>
                  <a className='btn btn-primary btn-sm' rel='publisher' target='_blank' href={student.contacts.linkedin}>
                    <i className='fa fa-linkedin' />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StudentCard
