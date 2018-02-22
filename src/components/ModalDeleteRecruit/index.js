import React, {Component} from 'react'
import Rodal from 'rodal'
import { Button } from 'react-bootstrap'
import 'rodal/lib/rodal.css'

class ModalDeleteRecruit extends Component {
  render () {
    return (this.props.recruit &&
      <div>
        <Rodal closeOnEsc visible={this.props.visible} onClose={this.props.onClose}>
          <div>
            <p>Are you sure you want to delete <strong>{this.props.recruit.clientFullname} Application</strong>?</p>
          </div>
          <Button bsStyle='danger' onClick={this.props.onClose}>No</Button>
          <Button bsStyle='primary' onClick={() => this.props.onSubmit(this.props.recruit)}>Yes</Button>
        </Rodal>
      </div>
    )
  }
}
export default ModalDeleteRecruit
