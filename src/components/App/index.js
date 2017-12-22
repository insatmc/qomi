import React from 'react';
import PropTypes from 'prop-types';

import 'src/assets/stylesheets/base.scss';

import StudentsList from '../StudentsList'

function App({ name }) {
  return (
    <StudentsList />
  );
};

App.propTypes = {
  name: PropTypes.string,
};

export default App;
