import React, {Component} from 'react'
import PropTypes from 'prop-types'
import 'src/assets/stylesheets/base.scss'

import StudentsList from '../StudentsList'

import AddStudent from '../AddStudent'

class App extends Component {
  render () {
    return (
      <div>
        <AddStudent />
      </div>
    )
  }
};

App.propTypes = {
  name: PropTypes.string
}

export default App
