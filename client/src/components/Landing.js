import React, { Component } from 'react';
import LoginForm from './Form/LoginForm';
import { connect } from 'react-redux';
import { fetchUserData } from '../actions';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

class Landing extends Component {
  render() {
    return (
      <div>
        <h1>Landing Route</h1>
        <LoginForm />
        <Button
          component={Link}
          to='/signup'
          variant='contained'
          color='primary'
        >
          Signup
        </Button>
      </div>
    );
  }
};

function mapStateToProps({ userAuth }) {
  return {
    userAuth
  }
};

export default connect(mapStateToProps, { fetchUserData })(Landing);
