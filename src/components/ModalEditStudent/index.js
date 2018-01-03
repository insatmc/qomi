import React, {Component} from 'react'
import Rodal from 'rodal'
import AddStudent from '../AddStudent'
import { Button } from 'react-bootstrap'

import 'rodal/lib/rodal.css'

class ModalEditStudent extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Rodal customStyles={{overflowY: 'scroll', height: '100%'}} closeOnEsc visible={this.props.visible} onClose={this.props.onClose}>
          <div>
            <AddStudent onSubmit={this.props.onSubmit} student={this.props.student} />
          </div>

        </Rodal>
      </div>
    )
  }
}
export default ModalEditStudent
