import React, {Component} from 'react'
import './style.css'

class AddStudent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fullName:'',
      location:'',
      Skills:''
    }
    this.handleInputChange = this.handleInputChange.bind(this);

  }
  handleInputChange(e) {
    const target = e.target;
    const value = target.value;

    this.setState({ fullName: value });
  }

  render () {
    return (
      <div className='student-form'>
        <form className='form-horizontal'>
          <fieldset>

            <legend><h3>Student Form</h3></legend>

            <div className='form-group'>
              <label className='col-md-4 control-label' htmlFor='add-fullname'><h4>Student fullname</h4></label>
              <div className='col-md-5'>
                <input id='add-fullname' name='add-fullname' type='text' placeholder='add fullname here' className='form-control input-md' required
                  value={this.state.fullName}
                  onChange={this.handleInputChange}/>

              </div>
            </div>

            <div className='form-group'>
              <label className='col-md-4 control-label' htmlFor='add-image'><h4>Add Image</h4></label>
              <div className='col-md-4'>
                <button id='add-image' name='add-image' className='btn btn-primary'>Find an Image</button>
              </div>
            </div>

            <div className='form-group'>
              <label className='col-md-4 control-label' htmlFor='add-location'><h4>Location</h4></label>
              <div className='col-md-4'>
                <select id='add-location' name='add-location' className='form-control'>
                  <option value='Ariana'>Ariana</option>
                  <option value='Beja'>Beja</option>
                  <option value='Ben Arous'>Ben Arous</option>
                  <option value='Bizerte'>Bizerte</option>
                  <option value='Gabes'>Gabes</option>
                  <option value='Gafsa'>Gafsa</option>
                  <option value='Jendouba'>Jendouba</option>
                  <option value='Kairouan'>Kairouan</option>
                  <option value='Kasserine'>Kasserine</option>
                  <option value='Kebili'>Kebili</option>
                  <option value='Kef'>Kef</option>
                  <option value='Mahdia'>Mahdia</option>
                  <option value='Manouba'>Manouba</option>
                  <option value='Medenine'>Medenine</option>
                  <option value='Monastir'>Monastir</option>
                  <option value='Nabeul'>Nabeul</option>
                  <option value='Sfax'>Sfax</option>
                  <option value='Sidi Bouzid'>Sidi Bouzid</option>
                  <option value='Siliana'>Siliana</option>
                  <option value='Sousse'>Sousse</option>
                  <option value='Tataouine'>Tataouine</option>
                  <option value='Tozeur'>Tozeur</option>
                  <option value='Tunis'>Tunis</option>
                  <option value='Zaghouan'>Zaghouan</option>
                  <option value='Outside Tunisia'>Outside Tunisia</option>
                </select>
              </div>
            </div>

            <div className='form-group'>
              <label className='col-md-4 control-label' htmlFor='add-disponibility'><h4>Disponibility</h4></label>
              <div className='col-md-4'>
                <select id='add-disponibility' name='add-disponibility' className='form-control'>
                  <option value='Immediately'>Immediately</option>
                  <option value='In a few days'>In a few days</option>
                  <option value='In 1 month'>In 1 month</option>
                  <option value='In 2 months'>In 2 months</option>
                  <option value='In 3 months or more'>In 3 months or more</option>
                </select>
              </div>
            </div>

            <div className='form-group'>
              <label className='col-md-4 control-label' htmlFor='looking-for-checkboxes'><h4>Looking for</h4></label>
              <div className='col-md-4'>
                <div className='checkbox'>
                  <label htmlFor='looking-for-checkboxes-0'>
                    <input type='checkbox' name='looking-for-checkboxes' id='looking-for-checkboxes-0' value='Freelance' />Freelance
                  </label>
                </div>
                <div className='checkbox'>
                  <label htmlFor='looking-for-checkboxes-1'>
                    <input type='checkbox' name='looking-for-checkboxes' id='looking-for-checkboxes-1' value='Internship' />
                    Internship
                  </label>
                </div>
                <div className='checkbox'>
                  <label htmlFor='looking-for-checkboxes-2'>
                    <input type='checkbox' name='looking-for-checkboxes' id='looking-for-checkboxes-2' value='CDI' />
                    CDI
                  </label>
                </div>
                <div className='checkbox'>
                  <label htmlFor='looking-for-checkboxes-3'>
                    <input type='checkbox' name='looking-for-checkboxes' id='looking-for-checkboxes-3' value='CDD' />
                    CDD
                  </label>
                </div>
                <div className='checkbox'>
                  <label htmlFor='looking-for-checkboxes-4'>
                    <input type='checkbox' name='looking-for-checkboxes' id='looking-for-checkboxes-4' value='Others' />
                    Others
                  </label>
                </div>
              </div>
            </div>

            <div className='form-group'>
              <label className='col-md-4 control-label' htmlFor='frontend-checkboxes'><h4>Front-End Technologies</h4></label>
              <div className='col-md-4'>
                <div className='checkbox'>
                  <label htmlFor='frontend-checkboxes-0'>
                    <input type='checkbox' name='frontend-checkboxes' id='frontend-checkboxes-0' value='HTML5' />
                    HTML5
                  </label>
                </div>
                <div className='checkbox'>
                  <label htmlFor='frontend-checkboxes-1'>
                    <input type='checkbox' name='frontend-checkboxes' id='frontend-checkboxes-1' value='CSS3' />
                    CSS3
                  </label>
                </div>
                <div className='checkbox'>
                  <label htmlFor='frontend-checkboxes-2'>
                    <input type='checkbox' name='frontend-checkboxes' id='frontend-checkboxes-2' value='Javascript' />
                    Javascript
                  </label>
                </div>
                <div className='checkbox'>
                  <label htmlFor='frontend-checkboxes-3'>
                    <input type='checkbox' name='frontend-checkboxes' id='frontend-checkboxes-3' value='Bootstrap' />
                    Bootstrap
                  </label>
                </div>
                <div className='checkbox'>
                  <label htmlFor='frontend-checkboxes-4'>
                    <input type='checkbox' name='frontend-checkboxes' id='frontend-checkboxes-4' value='Responsive Design' />
                    Responsive Design
                  </label>
                </div>
                <div className='checkbox'>
                  <label htmlFor='frontend-checkboxes-5'>
                    <input type='checkbox' name='frontend-checkboxes' id='frontend-checkboxes-5' value='React JS' />React JS
                  </label>
                </div>
                <div className='checkbox'>
                  <label htmlFor='frontend-checkboxes-6'>
                    <input type='checkbox' name='frontend-checkboxes' id='frontend-checkboxes-6' value='Angular JS' />Angular JS
                  </label>
                </div>
                <div className='checkbox'>
                  <label htmlFor='frontend-checkboxes-7'>
                    <input type='checkbox' name='frontend-checkboxes' id='frontend-checkboxes-7' value='React Native' />React Native
                  </label>
                </div>
                <div className='checkbox'>
                  <label htmlFor='frontend-checkboxes-8'>
                    <input type='checkbox' name='frontend-checkboxes' id='frontend-checkboxes-8' value='Vue JS' />Vue JS
                  </label>
                </div>
              </div>
            </div>

            <div className='form-group'>
              <label className='col-md-4 control-label' htmlFor='backend-checkboxes'><h4>Back-End Technologies</h4></label>
              <div className='col-md-4'>
                <div className='checkbox'>
                  <label htmlFor='backend-checkboxes-0'>
                    <input type='checkbox' name='backend-checkboxes' id='backend-checkboxes-0' value='Node JS' />Node JS
                  </label>
                </div>
                <div className='checkbox'>
                  <label htmlFor='backend-checkboxes-1'>
                    <input type='checkbox' name='backend-checkboxes' id='backend-checkboxes-1' value='Express JS' />Express JS
                  </label>
                </div>
                <div className='checkbox'>
                  <label htmlFor='backend-checkboxes-2'>
                    <input type='checkbox' name='backend-checkboxes' id='backend-checkboxes-2' value='MongoDB' />MongoDB
                  </label>
                </div>
                <div className='checkbox'>
                  <label htmlFor='backend-checkboxes-3'>
                    <input type='checkbox' name='backend-checkboxes' id='backend-checkboxes-3' value='Meteor JS' />Meteor JS
                  </label>
                </div>
                <div className='checkbox'>
                  <label htmlFor='backend-checkboxes-4'>
                    <input type='checkbox' name='backend-checkboxes' id='backend-checkboxes-4' value='Ruby on Rails' />Ruby on Rails
                  </label>
                </div>
                <div className='checkbox'>
                  <label htmlFor='backend-checkboxes-5'>
                    <input type='checkbox' name='backend-checkboxes' id='backend-checkboxes-5' value='.Net' />.Net
                  </label>
                </div>
                <div className='checkbox'>
                  <label htmlFor='backend-checkboxes-6'>
                    <input type='checkbox' name='backend-checkboxes' id='backend-checkboxes-6' value='Java' />Java
                  </label>
                </div>
                <div className='checkbox'>
                  <label htmlFor='backend-checkboxes-7'>
                    <input type='checkbox' name='backend-checkboxes' id='backend-checkboxes-7' value='Python' />Python
                  </label>
                </div>
                <div className='checkbox'>
                  <label htmlFor='backend-checkboxes-8'>
                    <input type='checkbox' name='backend-checkboxes' id='backend-checkboxes-8' value='PHP' />PHP
                  </label>
                </div>
                <div className='checkbox'>
                  <label htmlFor='backend-checkboxes-9'>
                    <input type='checkbox' name='backend-checkboxes' id='backend-checkboxes-9' value='Others' />Others
                  </label>
                </div>
              </div>
            </div>

            <div className='student-social-media'>

              <div className='form-group'>
                <label className='col-md-4 control-label' htmlFor='student-github'>Student GitHub</label>
                <div className='col-md-4'>
                  <input id='student-github' name='student-github' type='text' placeholder='' className='form-control input-md' required='' />
                </div>
              </div>

              <div className='form-group'>
                <label className='col-md-4 control-label' htmlFor='student-mail'>Student Mail</label>
                <div className='col-md-4'>
                  <input id='student-mail' name='student-mail' type='text' placeholder='' className='form-control input-md' />
                </div>
              </div>

              <div className='form-group'>
                <label className='col-md-4 control-label' htmlFor='student-linkedin'>Student LinkedIn</label>
                <div className='col-md-4'>
                  <input id='student-linkedin' name='student-linkedin' type='text' placeholder='' className='form-control input-md' />
                </div>
              </div>

              <div className='form-group'>
                <label className='col-md-4 control-label' htmlFor='student-twitter'>Student Twitter</label>
                <div className='col-md-4'>
                  <input id='student-twitter' name='student-twitter' type='text' placeholder='' className='form-control input-md' />
                </div>
              </div>
            </div>

            <div className='form-group'>
              <label className='col-md-4 control-label' htmlFor='save-button' />
              <div className='col-md-4'>
                <button
                  type='button'
                  id='save-button'
                  name='save-button'
                  className='btn btn-primary'
                  onClick={() =>this.props.onSubmit(this.state)}>
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
