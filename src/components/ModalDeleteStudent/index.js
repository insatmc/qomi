import React, {Component} from 'react'
import Rodal from 'rodal';
import { Button } from 'react-bootstrap';
import 'rodal/lib/rodal.css'


class ModalDeleteStudent extends Component{
  render(){
    return(
      <div>
        <Rodal  closeOnEsc={true} visible={this.props.visible} onClose={this.props.onClose}>
          <div>
            <p>Are you sure you want to delete <strong>{this.props.student && this.props.student.fullName}</strong>?</p>
          </div>
          <Button bsStyle='danger' onClick={this.props.onClose}>No</Button>
          <Button bsStyle='primary' onClick={() => this.props.onSubmit(this.props.student)} >Yes</Button>

        </Rodal>
      </div>
    )
  }
}
export default ModalDeleteStudent;
