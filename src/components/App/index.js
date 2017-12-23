import React, {Component} from 'react';
import PropTypes from 'prop-types';
import StudentCard from '../StudentCard'

import 'src/assets/stylesheets/base.scss';

import StudentsList from '../StudentsList'

class App extends Component {

  	render(){
  		return (
    		<StudentsList />
  		)
	}

}


export default App;
