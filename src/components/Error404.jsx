import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Error404(props){
  var errorStyle={
    color: 'lightpink'
  };
  return(
    <div style={errorStyle}>
      <h2>sorry the page {props.location.pathname} doesn't exist </h2>
      <h3>would you like to go back <Link to='/'>Home</Link>?</h3>
    </div>
  );
}

Error404.propTypes={
  location: PropTypes.object
};

export default Error404;
