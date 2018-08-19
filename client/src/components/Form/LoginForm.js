import React, { Component } from 'react';
import FormField from './FormField';
import { Link, withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';
import { Button } from '@material-ui/core';

class LoginForm extends Component {
  formSubmit = ({ email, password }) => {
    this.props.loginUser(email, password, () => {
      this.props.history.push('/home');
    });
  };

  render() {
    const { handleSubmit, userAuth: { errorMessage, isAuthenticating } } = this.props;
    return (
      <form onSubmit={handleSubmit(this.formSubmit)}>
        <Field
          name='loginEmail'
          component={FormField}
          label='Email'
        />
        <Field
          name='loginPassword'
          component={FormField}
          label='Password'
          type='password'
        />
        <p style={{ color: 'red' }}>{errorMessage ? errorMessage.message : ''}</p>
        <Button
          variant='contained'
          color='secondary'
          type='submit'
          disabled={isAuthenticating}
        >
          {isAuthenticating ? 'Logging in...' : 'Login'}
        </Button>
        <Button
          component={Link}
          to='/signup'
          variant='contained'
          color='primary'
        >
          Signup
        </Button>
      </form>
    );
  }
}

function validate(value) {
  const errors = {};
  if (!value.loginEmail) {
    errors.loginEmail = 'Email Required!'
  }
  if (!value.loginPassword) {
    errors.loginPassword = 'Password Required!'
  }
  return errors;
};

function mapStateToProps({ userAuth }) {
  return {
    userAuth
  };
};

export default withRouter(
  reduxForm({
    validate,
    form: 'value'
})(connect(mapStateToProps, { loginUser })(LoginForm)));
