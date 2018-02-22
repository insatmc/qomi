import React, {Component} from 'react'
import './style.css'
import {Checkbox, CheckboxGroup} from 'react-checkbox-group'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import swal from 'sweetalert'
import axios from 'axios'
const ReactTags = require('react-tag-autocomplete')

class StudentAddHimself extends Component {
  constructor (props) {
    super(props)
    this.state = {
      students: [],
      fullName: '',
      image: '',
      location: '',
      disponibility: '',
      lookingFor: [],
      skills: [],
      contacts: {
        twitter: '',
        mail: '',
        github: '',
        linkedin: ''
      },
      cv: '',
      role: 'student',
      tags: [
        {id: 1, name: 'HTML'},
        {id: 2, name: 'CSS'}
      ],
      suggestions: [
        {id: 3, name: 'Javascript'},
        {id: 4, name: 'Bootstrap'},
        {id: 5, name: 'Responsive Design'},
        {id: 6, name: 'ReactJS'},
        {id: 7, name: 'AngularJS'},
        {id: 8, name: 'VueJS'},
        {id: 9, name: 'React Native'},
        {id: 10, name: 'NodeJS'},
        {id: 11, name: 'ExpressJS'},
        {id: 12, name: 'MongoDB'},
        {id: 13, name: 'MeteorJS'},
        {id: 14, name: 'Ruby on Rails'},
        {id: 15, name: '.Net'},
        {id: 16, name: 'Java'},
        {id: 17, name: 'Python'},
        {id: 18, name: 'PHP'},
        {id: 19, name: 'C#'},
        {id: 20, name: 'Unity'},
        {id: 21, name: 'Web Design'},
        {id: 22, name: 'AI'},
        {id: 23, name: 'Others'},
        {id: 24, name: 'Android Dev'},
        {id: 25, name: 'Ios Dev'},
        {id: 26, name: 'Angular'},
        {id: 27, name: 'Git'},
        {id: 28, name: 'GitHub'},
        {id: 29, name: 'Redux'}
      ]
    }

    console.log('first props', props)

    if (props.student) {
      this.state = props.student
      console.log('updating userx²')
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleChangeImage = this.handleChangeImage.bind(this)
    this.handleChangeSkills = this.handleChangeSkills.bind(this)
    this.handleChangeDisponibility = this.handleChangeDisponibility.bind(this)
    this.handleChangeLookingFor = this.handleChangeLookingFor.bind(this)
    this.handleChangeCV = this.handleChangeCV.bind(this)
    this.handleChangeGithub = this.handleChangeGithub.bind(this)
    this.handleChangeTwitter = this.handleChangeTwitter.bind(this)
    this.handleChangeMail = this.handleChangeMail.bind(this)
    this.handleChangeLinkedIn = this.handleChangeLinkedIn.bind(this)
    this.intitStudents = this.intitStudents.bind(this)
    this.onAddStudent = this.onAddStudent.bind(this)
  }

  componentWillReceiveProps (props) {
    console.log('Component recieved props ', props)
  }

  handleDelete (i) {
    const tags = this.state.tags.slice(0)
    tags.splice(i, 1)
    this.setState({ tags })
  }

  handleAddition (tag) {
    const tags = [].concat(this.state.tags, tag)
    this.setState({ tags })
  }

  handleInputChange (e) {
    const target = e.target
    const value = target.value

    this.setState({
      fullName: value
    })
  }

  handleChangeImage (e) {
    const target = e.target
    const value = target.value

    this.setState({
      image: value
    })
  }

  handleChange (e) {
    const target = e.target
    const value = target.value

    this.setState({
      location: value
    })
  }

  handleChangeDisponibility (e) {
    const target = e.target
    const value = target.value

    this.setState({
      disponibility: value
    })
  }

  handleChangeLookingFor (newLookingFor) {
    this.setState({
      lookingFor: newLookingFor
    })
  }

  handleChangeCV (e) {
    const value = e.target.value

    this.setState({
      cv: value
    })
  }

  handleChangeGithub (e) {
    const value = e.target.value

    let contacts = Object.assign({}, this.state.contacts)
    contacts.github = value

    this.setState({contacts})
  }

  handleChangeLinkedIn (e) {
    const value = e.target.value

    let contacts = Object.assign({}, this.state.contacts)
    contacts.linkedin = value

    this.setState({contacts})
  }

  handleChangeTwitter (e) {
    const value = e.target.value

    let contacts = Object.assign({}, this.state.contacts)
    contacts.twitter = value

    this.setState({contacts})
  }

  handleChangeMail (e) {
    const value = e.target.value

    let contacts = Object.assign({}, this.state.contacts)
    contacts.mail = value

    this.setState({contacts})
  }

  handleChangeSkills (e) {
    this.setState({
      skills: this.state.tags.map(el => el.name)
    })
  }

  intitStudents () {
    axios.get('/api/students').then((data) => {
      this.setState({ students: data.data })
    }).catch(function (error) {
      alert('Something went wrong')
    })
  }

  onAddStudent () {
    this.setState({
      skills: this.state.tags.map(el => el.name)
    },
    axios.post('/api/student-add-himself', {
      fullName: this.state.fullName,
      image: this.state.image,
      location: this.state.location,
      disponibility: this.state.disponibility,
      lookingFor: this.state.lookingFor,
      skills: this.state.skills,
      contacts: {
        twitter: this.state.twitter,
        mail: this.state.mail,
        github: this.state.github,
        linkedin: this.state.linkedin
      },
      cv: this.state.cv,
      role: this.state.role,
      verification: 'unverified'
    }
    ).then((data) => {
      swal('Thank you for your time!', 'We will check you soon!', 'success')
    }).catch(function (error) {
      console.log(JSON.stringify(error))
      alert('Something is not going well.Please, retry.')
    }))
  }

  render () {
    return (
      <div className='add-student-form'>
        <form className='form-horizontal'>
          <fieldset>

            <div className='form-group'>
              <label className=' control-label' htmlFor='add-fullName'><h6>Full Name</h6></label>
              <div className=''>
                <input id='add-fullName' name='add-fullName' type='text' className='form-control input-md' required
                  value={this.state.fullName}
                  onChange={this.handleInputChange} />
              </div>
            </div>

            <div className='form-group'>
              <label className=' control-label' htmlFor='add-image'><h6>Image link</h6></label>
              <div className=''>
                <input id='add-image' name='add-image' type='text' className='form-control input-md'
                  value={this.state.image}
                  onChange={this.handleChangeImage}
                  required />
              </div>
            </div>

            <div className='form-group'>
              <label className=' control-label' htmlFor='add-location'><h6>Location</h6></label>
              <div className=''>
                <select id='add-location' name='add-location' className='form-control' value={this.state.location} onChange={this.handleChange}>
                  <option value='Beja'>Beja</option>
                  <option value='Bizerte'>Bizerte</option>
                  <option value='Gabes'>Gabes</option>
                  <option value='Gafsa'>Gafsa</option>
                  <option value='Grand Tunis'>Grand Tunis</option>
                  <option value='Jendouba'>Jendouba</option>
                  <option value='Kairouan'>Kairouan</option>
                  <option value='Kasserine'>Kasserine</option>
                  <option value='Kebili'>Kebili</option>
                  <option value='Kef'>Kef</option>
                  <option value='Mahdia'>Mahdia</option>
                  <option value='Medenine'>Medenine</option>
                  <option value='Monastir'>Monastir</option>
                  <option value='Nabeul'>Nabeul</option>
                  <option value='Sfax'>Sfax</option>
                  <option value='Sidi Bouzid'>Sidi Bouzid</option>
                  <option value='Siliana'>Siliana</option>
                  <option value='Sousse'>Sousse</option>
                  <option value='Tataouine'>Tataouine</option>
                  <option value='Tozeur'>Tozeur</option>
                  <option value='Zaghouan'>Zaghouan</option>
                  <option value='Outside Tunisia'>Outside Tunisia</option>
                </select>
              </div>
            </div>

            <div className='form-group'>
              <label className=' control-label' htmlFor='add-disponibility'><h6>Disponibility</h6></label>
              <div className=''>
                <select id='add-disponibility' name='add-disponibility' className='form-control' value={this.state.disponibility} onChange={this.handleChangeDisponibility}>
                  <option value='' />
                  <option value='Immediately'>Immediately</option>
                  <option value='In a few days'>In a few days</option>
                  <option value='In 1 month'>In 1 month</option>
                  <option value='In 2 months'>In 2 months</option>
                  <option value='In 3 months or more'>In 3 months or more</option>
                </select>
              </div>
            </div>

            <div className='form-group'>
              <ReactTags
                tags={this.state.tags}
                suggestions={this.state.suggestions}
                handleDelete={this.handleDelete.bind(this)}
                handleAddition={this.handleAddition.bind(this)}
                 />
            </div>

            <div className='form-group'>
              <label className=' control-label' htmlFor='looking-for-checkboxes'><h6>Looking for</h6></label>
              <div className=''>
                <CheckboxGroup
                  value={this.state.lookingFor}
                  onChange={this.handleChangeLookingFor}>

                  <div className='checkbox'>
                    <label>
                      <Checkbox name='looking-for-checkboxes' id='looking-for-checkboxes-0' value='Freelance' />
                      Freelance
                    </label>
                  </div>
                  <div className='checkbox'>
                    <label>
                      <Checkbox name='looking-for-checkboxes' id='looking-for-checkboxes-1' value='Internship' />
                      Internship
                    </label>
                  </div>
                  <div className='checkbox'>
                    <label>
                      <Checkbox name='looking-for-checkboxes' id='looking-for-checkboxes-2' value='CDI' />
                      CDI
                    </label>
                  </div>
                  <div className='checkbox'>
                    <label>
                      <Checkbox name='looking-for-checkboxes' id='looking-for-checkboxes-3' value='CDD' />
                      CDD
                    </label>
                  </div>
                  <div className='checkbox'>
                    <label>
                      <Checkbox name='looking-for-checkboxes' id='looking-for-checkboxes-4' value='SIVP' />
                      SIVP
                    </label>
                  </div>
                  <div className='checkbox'>
                    <label>
                      <Checkbox name='looking-for-checkboxes' id='looking-for-checkboxes-5' value='Contract Karama' />
                      Contract Karama
                    </label>
                  </div>
                </CheckboxGroup>
              </div>
            </div>

            <div className='form-group'>
              <label className=' control-label' htmlFor='add-cv'><h6>CV</h6></label>
              <div className=''>
                <input placeholder='cv link' id='add-cv' name='add-cv' type='text' className='form-control input-md'
                  value={this.state.cv}
                  onChange={this.handleChangeCV}
                  required />
              </div>
            </div>

            <div className='student-social-media'>

              <div className='form-group'>
                <label className=' control-label' htmlFor='student-github'>GitHub</label>
                <div className=''>
                  <input placeholder='github link' id='student-github' name='student-github' type='text' className='form-control input-md' required
                    value={this.state.contacts.github}
                    onChange={this.handleChangeGithub} />
                </div>
              </div>

              <div className='form-group'>
                <label className=' control-label' htmlFor='student-mail'>Email</label>
                <div className=''>
                  <input placeholder='email address' id='student-mail' name='student-mail' type='text' className='form-control input-md'
                    value={this.state.contacts.mail}
                    onChange={this.handleChangeMail}
                    required />
                </div>
              </div>

              <div className='form-group'>
                <label className=' control-label' htmlFor='student-linkedin'>LinkedIn</label>
                <div className=''>
                  <input placeholder='linkedin link' id='student-linkedin' name='student-linkedin' type='text' className='form-control input-md'
                    value={this.state.contacts.linkedin}
                    onChange={this.handleChangeLinkedIn} />
                </div>
              </div>

              <div className='form-group'>
                <label className=' control-label' htmlFor='student-twitter'>Twitter</label>
                <div className=''>
                  <input placeholder='twitter link' id='student-twitter' name='student-twitter' type='text' className='form-control input-md'
                    value={this.state.contacts.twitter}
                    onChange={this.handleChangeTwitter} />
                </div>
              </div>

            </div>

            <div className='form-group'>
              <div>
                <input placeholder='link'
                  type='submit'
                  id='save-button'
                  name='save-button'
                  className='student-submit-form-btn'
                  value='Click to Save'
                  onClick={this.onAddStudent}
                  />
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default StudentAddHimself
