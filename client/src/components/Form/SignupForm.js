import React, { Component } from 'react';
import FormField from './FormField';
import { Link, withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { signupUser } from '../../actions';
import { Button } from '@material-ui/core';

class SignupForm extends Component {
  formSubmit = ({ signupEmail, signupPassword }) => {
    this.props.signupUser(signupEmail, signupPassword, () => {
      this.props.history.push('/home');
    });
  };

  render() {
    const { handleSubmit, userAuth: { errorMessage, isAuthenticating } } = this.props;
    return (
      <form onSubmit={handleSubmit(this.formSubmit)}>
        <Field
          name='signupEmail'
          component={FormField}
          label='Email'
          type='email'
        />
        <Field
          name='signupPassword'
          component={FormField}
          label='Password'
          type='password'
        />
        <Field
          name='signupPasswordRe'
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
        <p>Already have an account? <Link to='/login'>Log in!</Link></p>
      </form>
    );
  }
}

function validate(value) {
  const errors = {};
  if (!value.signupEmail) {
    errors.signupEmail = 'Email Required!'
  }
  if (!value.signupPassword) {
    errors.signupPassword = 'Password Required!'
  }
  if (value.signupPassword !== value.signupPasswordRe) {
    errors.signupPasswordRe = 'Password must match!'
  }
  if (value.signupPassword && value.signupPassword.length < 6) {
    errors.signupPassword = 'Password must be at least 6 characters!'
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
