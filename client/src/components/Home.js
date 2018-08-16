import React, { Component } from 'react';
import requireAuth from './requireAuth';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { userSignout } from '../actions';

class Home extends Component {
  async handleSignout() {
    await this.props.userSignout();
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h1>Welcome to Home Route</h1>
        <button onClick={() => this.handleSignout()}>Signout</button>
      </div>
    );
  }
};

export default requireAuth(withRouter(connect(null, { userSignout })(Home)));
