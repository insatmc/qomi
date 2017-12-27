import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import AddStudent from '../AddStudent';
import ModalEditStudent from '../ModalEditStudent'
import ModalDeleteStudent from '../ModalDeleteStudent'
import Rodal from 'rodal';
import { Button } from 'react-bootstrap';
import 'rodal/lib/rodal.css'

class TableUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fullName:'',
      location:'',
      Skills:'',
      Disponibility:'',
      deleteModal: {
        isOpen: false,
        studentToDelete: null
      }
    }

    this.closeModalStudent = this.closeModalStudent.bind(this)
    this.showModalStudent = this.showModalStudent.bind(this)
    this.showDeleteModal = this.showDeleteModal.bind(this)
    this.hideDeleteModal = this.hideDeleteModal.bind(this)

  }

  closeModalStudent() {
    this.setState({
      isModalOpenS: false
    })
  }

  showModalStudent() {
    this.setState({
      isModalOpenS: true
    })
  }

  showDeleteModal(studentToDelete) {
    this.setState({
      deleteModal: {
        isOpen: true,
        studentToDelete: studentToDelete
      }
    })
  }

  hideDeleteModal() {
    this.setState({
      deleteModal:{
        isOpen:false
      }
    })
  }

  render() {
    return (
      <div>
        <ModalDeleteStudent
          visible={this.state.deleteModal.isOpen}
          onClose={this.hideDeleteModal}
          onSubmit={this.props.onDeleteUser}
          student={this.state.deleteModal.studentToDelete} />
        <div>
          <button type="button" className="btn btn-primary" onClick={this.showModalStudent}>Add Student
          </button>
        </div>

        <div>
          <Rodal customStyles={{overflowY: 'scroll', height: '100%'}} visible={this.state.isModalOpenS} onClose={this.closeModalStudent}>
            <div>
              <AddStudent onSubmit={this.props.onAddUser}/>
            </div>

            <Button bsStyle='danger' onClick={this.closeModalStudent}>Close</Button>

          </Rodal>
        </div>

        <div>
          <Table className="ui single line table">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>fullName</Table.HeaderCell>
                <Table.HeaderCell>location</Table.HeaderCell>
                <Table.HeaderCell>Skills</Table.HeaderCell>
                <Table.HeaderCell>Disponibility</Table.HeaderCell>
                <Table.HeaderCell>Actions</Table.HeaderCell>

              </Table.Row>
            </Table.Header>
            <Table.Body>
              {
                this.props.students.map( (student, i) => {
                  return(
                    <Table.Row key={i}>
                      <Table.Cell>{student.fullName}</Table.Cell>
                      <Table.Cell>{student.location}</Table.Cell>
                      <Table.Cell>{student.skills}</Table.Cell>
                      <Table.Cell>{student.Disponibility}</Table.Cell>
                      <Table.Cell>
                        <button
                          onClick={this.showModalStudent}
                        className="btn btn-success">
                          Edit
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => this.showDeleteModal(student)}>
                          Delete
                        </button>
                        <div>
                        </div>
                        <div>
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  )
                })
              }

            </Table.Body>
          </Table>
        </div>
      </div>

    );
  }
}

export default TableUser;
