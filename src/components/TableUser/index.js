import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import AddStudent from '../AddStudent'
import './style.css'
import { Modal, ModalHeader, Button } from 'react-bootstrap'

class TableUser extends Component {
  constructor (props) {
      super(props)
      this.state = {

        showModalStudent: false,
        showModalAddStudent:false
      }

    }
    close () {
      this.setState({

        showModalStudent: false,
        showModalAddStudent:false
      })
    };

    openModalStudent() {
      this.setState({
        showModalStudent: !this.state.showModalStudent
      })
    };
    openModalAddStudent() {
      this.setState({
        showModalAddStudent: !this.state.showModalAddStudent
      })
    };
    editStudent(){

    }
    addStudent(){

    }

  render() {
    var customStyles = {
      content : {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        height: '500px',
        overflowY: 'auto'
      }
    };



    return (
      <div>
      <button type="button" class="btn btn-primary" onClick={this.openModalAddStudent.bind(this)}>Add Student</button>
      <div style={{visibility: this.state.showModalAddStudent ? 'visible' : 'hidden' }} className='static-modal'>
  <Modal.Dialog style = { customStyles }>
    <Modal.Header >
      <Modal.Title>Add Student</Modal.Title>
    </Modal.Header>

    <Modal.Body style = { customStyles }>
    <AddStudent/>

    </Modal.Body>

    <Modal.Footer>
      <Button bsStyle='danger' onClick={this.close.bind(this)}>Close</Button>
      <Button bsStyle='primary'onClick={this.addStudent}>Save changes</Button>
    </Modal.Footer>

  </Modal.Dialog>
  </div>



        <Table className="ui single line table">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>fullName</Table.HeaderCell>
              <Table.HeaderCell>location</Table.HeaderCell>
              <Table.HeaderCell>Skills</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
          <Table.Row >
            <Table.Cell>ahmed</Table.Cell>
            <Table.Cell>tunis</Table.Cell>
            <Table.Cell>javascript</Table.Cell>
            <Table.Cell>
            <button bsStyle='primary'
               onClick={this.openModalStudent.bind(this)}
             className="btn btn-success">Edit</button>

            <button type="button" class="btn btn-danger">Delete</button>
            <div style={{visibility: this.state.showModalStudent ? 'visible' : 'hidden' }} className='static-modal'>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Edit Student</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <label> FullName: </label>
            <input
              ref={input => this.StudentNameInput = input}
              className='form-control'
              type='text'
            />

            <label>location: </label>
            <input
              ref={input => this.StudentLocationInput = input}
              className='form-control'
              type='text' />

            <label> Skills: </label>
            <input
              ref={input => this.StudentSkillsInput = input}
              className='form-control'
              type='text'
              />

          </Modal.Body>

          <Modal.Footer>
            <Button bsStyle='danger' onClick={this.close.bind(this)}>Close</Button>
            <Button bsStyle='primary'onClick={this.editStudent}>Save changes</Button>
          </Modal.Footer>

        </Modal.Dialog>
        </div>

            </Table.Cell>
          </Table.Row>


          </Table.Body>
        </Table>
    </div>);
  }
}

export default TableUser;
