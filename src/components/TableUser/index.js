import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import AddStudent from '../AddStudent'
import ModalEditStudent from '../ModalEditStudent'
import ModalDeleteStudent from '../ModalDeleteStudent'
import './style.css'
import Rodal from 'rodal'
import { Button } from 'react-bootstrap'
import 'rodal/lib/rodal.css'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import axios from 'axios'

const verifiedStyle = {
  color: '#1e7e34',
  fontWeight: 'bold'
}

const unverifiedStyle = {
  color: '#dc3545',
  fontWeight: 'bold'
}

class TableUser extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fullName: '',
      location: '',
      Skills: '',
      Disponibility: '',
      verification: '',
      deleteModal: {
        isOpen: false,
        studentToDelete: null
      },
      UpdateModal: {
        isOpen: false,
        studentToUpdate: null
      },
      students: []
    }

    this.closeModalStudent = this.closeModalStudent.bind(this)
    this.showModalStudent = this.showModalStudent.bind(this)
    this.showDeleteModal = this.showDeleteModal.bind(this)
    this.hideDeleteModal = this.hideDeleteModal.bind(this)
    this.showUpdateModal = this.showUpdateModal.bind(this)
    this.hideUpdateModalModal = this.hideUpdateModal.bind(this)
  }

  closeModalStudent () {
    this.setState({
      isModalOpenS: false
    })
  }
  showModalStudent () {
    this.setState({
      isModalOpenS: true
    })
  }

  showDeleteModal (studentToDelete) {
    this.setState({
      deleteModal: {
        isOpen: true,
        studentToDelete: studentToDelete
      }
    })
  }

  hideDeleteModal () {
    this.setState({
      deleteModal: {
        isOpen: false
      }
    })
    window.location.reload()
  }

  showUpdateModal (studentToUpdate) {
    this.setState({
      UpdateModal: {
        isOpen: true,
        studentToUpdate: studentToUpdate
      }
    })
  }

  hideUpdateModal () {
    this.setState({
      UpdateModal: {
        isOpen: false
      }
    })
  }

  logout () {
    window.localStorage.removeItem('token')
    this.props.onLogout()
  }

  render () {
    return (
      <div className='AdminHolder'>
        <ModalDeleteStudent
          visible={this.state.deleteModal.isOpen}
          onClose={this.hideDeleteModal}
          onSubmit={() => {
            this.hideDeleteModal()
            this.props.onDeleteUser(this.state.deleteModal.studentToDelete)
          }}
          student={this.state.deleteModal.studentToDelete} />

        <ModalEditStudent
          visible={this.state.UpdateModal.isOpen}
          onClose={this.hideUpdateModalModal}
          onSubmit={(student) => {
            this.hideUpdateModalModal()
            this.props.onUpdateUser(student)
          }}
          student={this.state.UpdateModal.studentToUpdate} />

        <div className='admin-topnavbar'>

          <div>
            <span>Filter Students:</span>
            <button className='btn btn-info' type='button' value='All' onClick={this.props.sortStudentsByVerification}>All
            </button>
            <button className='btn btn-info' type='button' value='Verified' onClick={this.props.sortStudentsByVerification}>Verified
            </button>
            <button className='btn btn-info' type='button' value='Unverified' onClick={this.props.sortStudentsByVerification}>Unverified
            </button>
            <span>
              <input type='input' className='admin-search' placeholder='Search by name..'
                onChange={this.props.adminStudentSearch} />
            </span>
          </div>

          <div>
            <span className='recruitment-link-container'>
              <Link to='/admin/recruitment-suggestions' target='_blank'>Recruitment Apps</Link>
            </span>

            <button type='button' className='btn btn-info' id='AddStudentBtn' onClick={this.showModalStudent}>Add Student
            </button>

            <button className='btn btn-danger' id='logout-button' onClick={() => this.logout()}>Logout
            </button>
          </div>

        </div>

        <div>
          <Rodal customStyles={{overflowY: 'scroll', height: '100%'}} visible={this.state.isModalOpenS} onClose={this.closeModalStudent}>
            <div>
              <AddStudent onSubmit={this.props.onAddUser} />
            </div>

            <Button bsStyle='danger' onClick={this.closeModalStudent}>Close</Button>

          </Rodal>
        </div>

        <div>
          <Table className='ui single line table'>
            <Table.Header className='tabHead'>
              <Table.Row>
                <Table.HeaderCell>Full Name</Table.HeaderCell>
                <Table.HeaderCell>Verification</Table.HeaderCell>
                <Table.HeaderCell>Location</Table.HeaderCell>
                <Table.HeaderCell>Skills</Table.HeaderCell>
                <Table.HeaderCell>Disponibility</Table.HeaderCell>
                <Table.HeaderCell>Actions</Table.HeaderCell>

              </Table.Row>
            </Table.Header>
            <Table.Body>
              {
                this.props.students.map((student, i) => {
                  return (
                    <Table.Row key={i}>
                      <Table.Cell>{student.fullName}</Table.Cell>
                      <Table.Cell>
                        {
                          student.verification == 'verified' ?
                          (
                            <span style={verifiedStyle}>{student.verification}</span>
                          ) : (
                            <span style={unverifiedStyle}>{student.verification}</span>
                          )
                        }
                      </Table.Cell>
                      <Table.Cell>{student.location}</Table.Cell>
                      <Table.Cell>
                        {
                          student.skills.map((el, i) => <span key={i} className='skill-span'>{el}</span>)
                        }
                      </Table.Cell>
                      <Table.Cell>{student.disponibility}</Table.Cell>
                      <Table.Cell>
                        <button
                          onClick={() => this.showUpdateModal(student)}
                          className='btn btn-success table-btn'>
                          Edit
                        </button>
                        <button
                          type='button'
                          className='btn btn-danger table-btn'
                          onClick={() => this.showDeleteModal(student)}>
                          Delete
                        </button>
                        <div />
                        <div />
                      </Table.Cell>
                    </Table.Row>
                  )
                })
              }

            </Table.Body>
          </Table>
        </div>
      </div>

    )
  }
}

export default TableUser
