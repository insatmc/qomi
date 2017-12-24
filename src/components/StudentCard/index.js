import React, {Component} from 'react'
import './StudentCard.css'

class StudentCard extends Component {
  render () {
    let student = this.props.student
    console.log(student)
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div >

              <div className='card hovercard'>
                <div className='cardheader' />
                <div className='avatar'>
                  <img alt='student-image' src={student.image} />
                </div>
                <div className='info'>
                  <div className='title'>
                    <h2>{student.fullname}</h2>
                  </div>
                  <hr className='hr-style1' />
                  <div className='desc'><h4>Location:</h4>{student.location} </div>
                  <div className='desc'><h4>Disponibility:</h4>{student.disponibility} </div>
                  <div className='desc'><h4>Looking For:</h4>{student['looking for']} </div>
                  <div className='desc'><h4>Skills:</h4>{student.technologies}</div>
                  <hr className='hr-style2' />
                </div>
                <div className='bottom'>
                  <a className='btn btn-primary btn-twitter btn-sm' target='_blank' href={student.contact.twitter}>
                    <i className='fa fa-twitter' />
                  </a>
                  <a className='btn btn-danger btn-sm' rel='publisher'
                    target='_blank' href="mailto:"+{student.contact.mail}>
                    <i className='fa fa-google-plus' />
                  </a>
                  <a className='btn btn-secondary btn-sm ' rel='publisher'
                    target='_blank' href={student.contact.github}>
                    <i className='fa fa-github' />
                  </a>
                  <a className='btn btn-primary btn-sm' rel='publisher' target='_blank' href={student.contact.linkedin}>
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
