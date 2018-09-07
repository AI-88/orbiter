import React, { Component } from 'react';
import requireAuth from './requireAuth';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { userSignout } from '../actions';
import { Button } from '@material-ui/core';

class Home extends Component {
  async handleSignout() {
    await this.props.userSignout();
    this.props.history.push('/');
  };

  render() {
    const { authenticated: { email } } = this.props.userAuth

    return (
      <div>
        <h1>Welcome, {email}</h1>
        <Button
          variant='contained'
          color='secondary'
          onClick={() => this.handleSignout()}
        >
          Signout
        </Button>
      </div>
    );
  }
};

function mapStateToProps({ userAuth }) {
  return {
    userAuth
  }
}

export default withRouter(connect(mapStateToProps, { userSignout })(Home));
