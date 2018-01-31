import React, {Component} from 'react'
import './style.css'
import {Checkbox, CheckboxGroup} from 'react-checkbox-group'

class AddStudent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fullName: '',
      image: '',
      location: '',
      disponibility: '',
      verification: '',
      lookingFor: [],
      skills: [],
      contacts: {
        twitter: '',
        mail: '',
        github: '',
        linkedin: ''
      },
      cv: ''
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
    this.handleChangeVerification = this.handleChangeVerification.bind(this)
  }

  componentWillReceiveProps (props) {
    console.log('Component recieved props ', props)
    if (props.student) {
      this.setState({ ...props.student })
    }
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
    const value = e.target.value

    this.setState({
      disponibility: value
    })
  }

  handleChangeSkills (newSkills) {
    this.setState({
      skills: newSkills
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

  handleChangeVerification (e) {
    const value = e.target.value

    this.setState({
      verification: value
    })
  }

  render () {
    return (
      <div className='student-form'>
        <form className='form-horizontal'>
          <fieldset>

            <legend><h3>STUDENT FORM</h3></legend>

            <div className='form-group'>
              <label className='col-md-10 control-label' htmlFor='add-fullName'><h4>Student Fullname</h4></label>
              <div className='col-md-10'>
                <input id='add-fullName' name='add-fullName' type='text' placeholder='add fullname here' className='form-control input-md' required
                  value={this.state.fullName}
                  onChange={this.handleInputChange} />
              </div>
            </div>

            <div className='form-group'>
              <label className='col-md-10 control-label' htmlFor='add-verification'><h4>Verification</h4></label>
              <div className='col-md-10'>
                <select id='add-verification' name='add-verification' className='form-control' value={this.state.verification} onChange={this.handleChangeVerification}>
                  <option value='none'>none</option>
                  <option value='verified'>verified</option>
                  <option value='unverified'>unverified</option>
                </select>
              </div>
            </div>

            <div className='form-group'>
              <label className='col-md-10 control-label' htmlFor='add-image'><h4>Add Image</h4></label>
              <div className='col-md-10'>
                <input id='add-image' name='add-image' type='text' placeholder='add image link' className='form-control input-md'
                  value={this.state.image}
                  onChange={this.handleChangeImage} />
              </div>
            </div>

            <div className='form-group'>
              <label className='col-md-10 control-label' htmlFor='add-location'><h4>Location</h4></label>
              <div className='col-md-10'>
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
              <label className='col-md-10 control-label' htmlFor='add-disponibility'><h4>Disponibility</h4></label>
              <div className='col-md-10'>
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
              <label className='col-md-10 control-label' htmlFor='skills'><h4>Skills</h4></label>
              <div className='col-md-10'>

                <CheckboxGroup
                  value={this.state.skills}
                  onChange={this.handleChangeSkills}>

                  <div className='checkbox'>
                    <label>
                      <Checkbox name='skills' id='skills-0' value='HTML' />
                    HTML
                  </label>
                  </div>
                  <div className='checkbox'>
                    <label>
                      <Checkbox name='skills' id='skills-1' value='CSS' />
                    CSS
                  </label>
                  </div>
                  <div className='checkbox'>
                    <label>
                      <Checkbox name='skills' id='skills-2' value='Javascript' />
                    Javascript
                  </label>
                  </div>
                  <div className='checkbox'>
                    <label>
                      <Checkbox name='skills' id='skills-3' value='Bootstrap' />
                    Bootstrap
                  </label>
                  </div>
                  <div className='checkbox'>
                    <label>
                      <Checkbox name='skills' id='skills-4' value='Responsive Design' />
                    Responsive Design
                  </label>
                  </div>
                  <div className='checkbox'>
                    <label>
                      <Checkbox name='skills' id='skills-5' value='ReactJS' />
                    ReactJS
                  </label>
                  </div>
                  <div className='checkbox'>
                    <label>
                      <Checkbox name='skills' id='skills-6' value='AngularJS' />
                    AngularJS
                  </label>
                  </div>
                  <div className='checkbox'>
                    <label>
                      <Checkbox name='skills' id='skills-7' value='VueJS' />
                    VueJS
                  </label>
                  </div>
                  <div className='checkbox'>
                    <label>
                      <Checkbox name='skills' id='skills-8' value='React Native' />
                    React Native
                  </label>
                  </div>
                  <div className='checkbox'>
                    <label>
                      <Checkbox name='skills' id='skills-9' value='NodeJS' />
                    NodeJS
                  </label>
                  </div>
                  <div className='checkbox'>
                    <label>
                      <Checkbox name='skills' id='skills-10' value='ExpressJS' />
                    ExpressJS
                  </label>
                  </div>
                  <div className='checkbox'>
                    <label>
                      <Checkbox name='skills' id='skills-11' value='MongoDB' />
                    MongoDB
                  </label>
                  </div>
                  <div className='checkbox'>
                    <label>
                      <Checkbox name='skills' id='skills-12' value='MeteorJS' />
                    MeteorJS
                  </label>
                  </div>
                  <div className='checkbox'>
                    <label>
                      <Checkbox name='skills' id='skills-13' value='Ruby on Rails' />
                    Ruby on Rails
                  </label>
                  </div>
                  <div className='checkbox'>
                    <label>
                      <Checkbox name='skills' id='skills-14' value='.Net' />
                    .Net
                  </label>
                  </div>
                  <div className='checkbox'>
                    <label>
                      <Checkbox name='skills' id='skills-15' value='Java' />
                    Java
                  </label>
                  </div>
                  <div className='checkbox'>
                    <label>
                      <Checkbox name='skills' id='skills-16' value='Python' />
                    Python
                  </label>
                  </div>
                  <div className='checkbox'>
                    <label>
                      <Checkbox name='skills' id='skills-17' value='PHP' />
                    PHP
                  </label>
                  </div>
                  <div className='checkbox'>
                    <label>
                      <Checkbox name='skills' id='skills-18' value='C#' />
                    C#
                  </label>
                  </div>
                  <div className='checkbox'>
                    <label>
                      <Checkbox name='skills' id='skills-19' value='Unity' />
                    Unity
                  </label>
                  </div>
                  <div className='checkbox'>
                    <label>
                      <Checkbox name='skills' id='skills-20' value='Web Design' />
                    Web Design
                  </label>
                  </div>
                  <div className='checkbox'>
                    <label>
                      <Checkbox name='skills' id='skills-21' value='AI' />
                    AI
                  </label>
                  </div>
                  <div className='checkbox'>
                    <label>
                      <Checkbox name='skills' id='skills-22' value='Others' />
                    Others
                  </label>
                  </div>
                  <div className='checkbox'>
                    <label>
                      <Checkbox name='skills' id='skills-23' value='Android Dev' />
                    Android Dev
                  </label>
                  </div>
                  <div className='checkbox'>
                    <label>
                      <Checkbox name='skills' id='skills-24' value='Ios Dev' />
                    Ios Dev
                  </label>
                  </div>
                </CheckboxGroup>

              </div>
            </div>

            <div className='form-group'>
              <label className='col-md-10 control-label' htmlFor='looking-for-checkboxes'><h4>Looking for</h4></label>
              <div className='col-md-10'>
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
                      <Checkbox name='looking-for-checkboxes' id='looking-for-checkboxes-4' value='Others' />
                      Others
                    </label>
                  </div>

                </CheckboxGroup>
              </div>
            </div>

            <div className='form-group'>
              <label className='col-md-10 control-label' htmlFor='add-cv'><h4>Student CV</h4></label>
              <div className='col-md-10'>
                <input id='add-cv' name='add-cv' type='text' placeholder='add CV link here' className='form-control input-md'
                  value={this.state.cv}
                  onChange={this.handleChangeCV} />
              </div>
            </div>

            <div className='student-social-media'>

              <div className='form-group'>
                <label className='col-md-10 control-label' htmlFor='student-github'>Student GitHub</label>
                <div className='col-md-10'>
                  <input id='student-github' name='student-github' type='text' placeholder='' className='form-control input-md' required
                    value={this.state.contacts.github}
                    onChange={this.handleChangeGithub} />
                </div>
              </div>

              <div className='form-group'>
                <label className='col-md-10 control-label' htmlFor='student-mail'>Student Mail</label>
                <div className='col-md-10'>
                  <input id='student-mail' name='student-mail' type='text' placeholder='' className='form-control input-md'
                    value={this.state.contacts.mail}
                    onChange={this.handleChangeMail} />
                </div>
              </div>

              <div className='form-group'>
                <label className='col-md-10 control-label' htmlFor='student-linkedin'>Student LinkedIn</label>
                <div className='col-md-10'>
                  <input id='student-linkedin' name='student-linkedin' type='text' placeholder='' className='form-control input-md'
                    value={this.state.contacts.linkedin}
                    onChange={this.handleChangeLinkedIn} />
                </div>
              </div>

              <div className='form-group'>
                <label className='col-md-10 control-label' htmlFor='student-twitter'>Student Twitter</label>
                <div className='col-md-10'>
                  <input id='student-twitter' name='student-twitter' type='text' placeholder='' className='form-control input-md'
                    value={this.state.contacts.twitter}
                    onChange={this.handleChangeTwitter} />
                </div>
              </div>

            </div>

            <div className='form-group'>
              <div className='col-md-6'>
                <button
                  type='button'
                  id='save-button'
                  name='save-button'
                  className='btn btn-primary'
                  onClick={() => this.props.onSubmit(this.state)}>
                  Click to Save
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default AddStudent
