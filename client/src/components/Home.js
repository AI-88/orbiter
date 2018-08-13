import React, { Component } from 'react';
import LoginForm from './Form/LoginForm';
import { connect } from 'react-redux';
import { fetchUserData } from '../actions';
import { Link } from 'react-router-dom';

class Home extends Component {
  componentDidMount() {
    this.props.fetchUserData();
  };

  render() {
    console.log(this.props.users.data);
    return (
      <div>
        <h1>Home Route</h1>
        <LoginForm />
        <Link to='/signup'><button>To Signup</button></Link>
        <p style={{ color: 'green', textWeight: 'bold' }}>{this.props.newUsers.isCreated ? 'User has been succesully created!' : ''}</p>
      </div>
    );
  }
};

function mapStateToProps({ users, newUsers }) {
  return {
    users,
    newUsers
  }
};

export default connect(mapStateToProps, { fetchUserData })(Home);
