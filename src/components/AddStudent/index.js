import React, {Component} from 'react'
import './style.css'

class AddStudent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fullName:'',
      location:'',
      Skills:'',
      Disponibility:''
    }

    console.log("first props" ,props)

    if(props.student){
      this.state = props.student
      console.log("updating userx²")
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSkills = this.handleChangeSkills.bind(this);
    this.handleChangeDisponibility = this.handleChangeDisponibility.bind(this);
  }

  componentWillReceiveProps(props){
    console.log("Component recieved props ",props)
    if(props.student){
      this.setState({ ...props.student })
    }
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;

    this.setState({ fullName: value });
  }
  handleChange(e) {
    const target = e.target;
    const value = target.value;

    this.setState({
    location:value});

  }

  handleChangeDisponibility(e) {
    const target = e.target;
    const value = target.value;

    this.setState({
    Disponibility:value});
  }
  handleChangeSkills(e) {
    const target = e.target;
    const value = target.value;

    this.setState({
    Skills:value});
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
                <select id='add-location' name='add-location' className='form-control' value={this.state.location} onChange={this.handleChange}>
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
                <select id='add-disponibility' name='add-disponibility' className='form-control' value={this.state.Disponibility} onChange={this.handleChangeDisponibility}>
                  <option value='Immediately'>Immediately</option>
                  <option value='In a few days'>In a few days</option>
                  <option value='In 1 month'>In 1 month</option>
                  <option value='In 2 months'>In 2 months</option>
                  <option value='In 3 months or more'>In 3 months or more</option>
                </select>
              </div>
            </div>
            <div className='form-group'>
              <label className='col-md-4 control-label' htmlFor='add-skills'><h4>Skills</h4></label>
              <div className='col-md-4'>
                <select id='add-skills' name='add-skills' className='form-control' value={this.state.Skills} onChange={this.handleChangeSkills}>
                  <option value='Javascript'>Javascript</option>
                  <option value='hTML5'>hTML5</option>
                  <option value='CSS3'>CSS3</option>
                  <option value='Bootstrap'>Bootstrap</option>
                  <option value='Responsive Design'>Responsive Design</option>
                  <option value='Vue JS'>Vue JS</option>
                  <option value='Angular JS'>Angular JS</option>
                  <option value='React JS'>React JS</option>
                  <option value='NodeJS&&MongoDB'>NodeJS&&MongoDB</option>
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
