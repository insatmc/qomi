import React, {Component} from 'react'
import Rodal from 'rodal';
import { Button } from 'react-bootstrap';
import 'rodal/lib/rodal.css'


class ModalEditStudent extends Component{
  constructor(props){
    super(props)
    this.state = {
    isModalOpen: false,
      ...this.props.student
    }
    this.closeModal = this.closeModal.bind(this)
    this.showModal = this.showModal.bind(this)
  }
  closeModal() {
    this.setState({
      isModalOpen: false
    })
  }

  showModal() {
    this.setState({
      isModalOpen: true
    })
  }
  render(){
    return(
      <div>
        <Rodal customStyles={{overflowY: 'scroll'}} closeOnEsc={true} visible={this.state.isModalOpen} onClose={this.closeModal}>
          <label> FullName: </label>
          <input
            onChange={(e) => this.setState({fullName: e.targer.value})}
            className='form-control'
            type='text'
          />

          <label>location: </label>
          <input
            onChange={(e) => this.setState({location: e.targer.value})}
            className='form-control'
          type='text' />
          <label> Skills: </label>
          <input
            onChange={(e) => this.setState({skills: e.targer.value})}
            className='form-control'
            type='text'
          />
          <Button bsStyle='danger' onClick={this.closeModal}>Close</Button>
          <Button bsStyle='primary' onClick={this.editStudent}>Save changes</Button>

        </Rodal>
      </div>
    )
  }
}
export default ModalEditStudent;
