import React, { Component } from 'react'
import './style.css'
import Rodal from 'rodal'
import 'rodal/lib/rodal.css'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import ModalDeleteRecruit from '../ModalDeleteRecruit'

class RecruitsToDisplay extends Component {
  constructor (props) {
    super(props)
    this.state = {
      recruits: [],
      recruiterToFind: '',
      deleteModal: {
        isOpen: false,
        recruitToDelete: null
      }
    }
    this.showDeleteModal = this.showDeleteModal.bind(this)
    this.hideDeleteModal = this.hideDeleteModal.bind(this)
    this.deleteRecruit = this.deleteRecruit.bind(this)
  }

  componentDidMount () {
    axios.get('/api/recruits', {
      validateStatus: function (status) {
        return status < 400 // Reject only if the status code is greater than or equal to 500
      }
    }).then((data) => {
      console.log(data)
      let recruits = data.data
      this.setState({
        recruits: recruits
      })
    }).catch(function (error) {
      console.log(error)
    })
  }

  showDeleteModal = (recruitToDelete) => {
    this.setState({
      deleteModal: {
        isOpen: true,
        recruitToDelete: recruitToDelete
      }
    })
  }

  hideDeleteModal = () => {
    this.setState({
      deleteModal: {
        isOpen: false
      }
    })
  }

  searchRecruiter = (e) => {
    this.setState({
      recruiterToFind: e.target.value
    })
  }

  deleteRecruit = (recruit) => {
    console.log(recruit)
    console.log(recruit._id)
    axios.delete(`/api/recruits/${recruit._id} `)
    .then(()=>{
      this.setState({
        recruits: this.state.recruits.filter(el => el._id != recruit._id)
      })
    })
    .catch(function(error) {
      alert('Something is not going well dude.')
    })
  }

  render () {
    return (
      <div>
        <ModalDeleteRecruit
          visible={this.state.deleteModal.isOpen}
          onClose={this.hideDeleteModal}
          recruit={this.state.deleteModal.recruitToDelete}
          onSubmit={() => {
            this.hideDeleteModal()
            this.deleteRecruit(this.state.deleteModal.recruitToDelete)
          }} />
        <header className='recruits-offers-page-header'>
          <h2 className='recruits-container-header'>Recruiters Applications</h2>
          <input className='form-control' onChange={this.searchRecruiter.bind(this)} placeholder='search offers by client name' className='admin-recruits-search' />
        </header>
        <div className='row recruits-container'>
          {
          this.state.recruits.filter((el) => el.clientFullname.toLowerCase().includes(this.state.recruiterToFind.toLowerCase())).map((el, i) => {
            return (
              <div key={i} className='card recruiter-card col-xs-12 col-sm-5 col-md-5 col-lg-5'>


                <div className='card-header'>
                  <h4>{el.clientFullname}</h4>
                  <button
                    type='button'
                    className='btn btn-danger table-btn'
                    onClick={() => this.showDeleteModal(el)}>
                    <i className='fa fa-trash' />
                  </button>
                </div>
                <div className='card-body'>
                  <h5 className='card-title'><i className='fa fa-building' /> {el.companyName}</h5>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item'><a href={`tel:${el.clientPhone}`}><i className='fa fa-phone' /> {el.clientPhone}</a></li>
                    <li className='list-group-item'><a href={`mailto:${el.clientMail}`}><i className='fa fa-envelope' /> {el.clientMail}</a></li>
                    <li className='list-group-item'><a href={el.companyWebsite} target='_blank'><i className='fa fa-link' /> Chech company website</a></li>
                  </ul>
                  <div className='jumbotron jumbotron-fluid'>
                    <p>{el.clientMsg}</p>
                  </div>
                </div>

              </div>
            )
          })
        }
        </div>
      </div>
    )
  }
}

export default RecruitsToDisplay
