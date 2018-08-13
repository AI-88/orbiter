import _ from 'lodash';
import React, { Component } from 'react';
import LoginForm from './Form/LoginForm';
import { connect } from 'react-redux';
import { fetchUserData } from '../actions';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    console.log(this.props.userAuth.data);
    return (
      <div>
        <h1>Home Route</h1>
        <LoginForm />
        <Link to='/signup'><button>To Signup</button></Link>
        <p style={{ color: 'green', textWeight: 'bold' }}>{_.isEmpty(this.props.userAuth.data) ? '' : 'User has been succesully created!'}</p>
      </div>
    );
  }
};

function mapStateToProps({ userAuth }) {
  return {
    userAuth
  }
};

export default connect(mapStateToProps, { fetchUserData })(Home);
