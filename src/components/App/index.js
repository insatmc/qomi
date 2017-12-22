import React from 'react';
import PropTypes from 'prop-types';

import 'src/assets/stylesheets/base.scss';

<<<<<<< HEAD

function App({ name }) {
  return (
    <h1>Hello, {name}!</h1>
=======
import StudentsList from '../StudentsList'

function App({ name }) {
  return (
    <StudentsList />
>>>>>>> c671d3c09c4b5943a61dc27620d23886d7c28860
  );
};

App.propTypes = {
  name: PropTypes.string,
};

export default App;
