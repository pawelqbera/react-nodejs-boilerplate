import React from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

import '../../styles/bootstrap.less';

axios.defaults.baseURL = (process.env.NODE_ENV !== 'production') ? 'http://localhost:8080/api/' : '';

function getName() {
	axios.get('/name')
	  .then(function (response) {
	    console.log(response);
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
}

function App({ name }) {

	getName();

	return (
		<div>
			<h1>Welcome to {name} webapp:)!</h1>
			<a href="login">Login to the app</a>
		</div>
	);
};

App.propTypes = {
	name: PropTypes.string,
};

export default App;
