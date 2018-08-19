import React, { Component } from 'react';
import FormField from './FormField';
import { Link, withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { signupUser } from '../../actions';
import { Button } from '@material-ui/core';

class SignupForm extends Component {
  formSubmit = ({ email, password }) => {
    this.props.signupUser(email, password, () => {
      this.props.history.push('/home');
    });
  };

  render() {
    const { handleSubmit, userAuth: { errorMessage, isAuthenticating } } = this.props;
    return (
      <form onSubmit={handleSubmit(this.formSubmit)}>
        <Field
          name='email'
          component={FormField}
          label='Email'
          type='email'
        />
        <Field
          name='password'
          component={FormField}
          label='Password'
          type='password'
        />
        <Field
          name='passwordRe'
          component={FormField}
          label='Retype Password'
          type='password'
        />
        <p style={{ color: 'red', textWeight: 'bold' }}>{errorMessage ? errorMessage.message : ''}</p>
        <Button
          variant='contained'
          color='primary'
          type='submit'
          disabled={isAuthenticating}
        >
          {isAuthenticating ? 'Submitting...' : 'Sign Up'}
        </Button>
        <Button
          component={Link}
          to='/'
          variant='contained'
          color='secondary'
        >
          Back
        </Button>
      </form>
    );
  }
}

function validate(value) {
  const errors = {};
  if (!value.email) {
    errors.email = 'Email Required!'
  }
  if (!value.password) {
    errors.password = 'Password Required!'
  }
  if (value.password !== value.passwordRe) {
    errors.passwordRe = 'Password must match!'
  }
  if (value.password && value.password.length < 6) {
    errors.password = 'Password must be at least 6 characters!'
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
  })(connect(mapStateToProps, { signupUser })(SignupForm)));
