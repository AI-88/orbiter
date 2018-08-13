import React, { Component } from 'react';
import FormField from './FormField';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { authUser } from '../../actions';

class SignupForm extends Component {
  formSubmit = ({ email, password }) => {
    this.props.authUser(email, password, () => {
      this.props.history.push('/');
    });
  };

  render() {
    const { handleSubmit, userAuth: { isAuthenticating } } = this.props;
    const minLength = value => value && value.length < 6 ? 'Password must be at least 6 characters' : undefined;

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
          validate={minLength}
        />
        <Field
          name='passwordRe'
          component={FormField}
          label='Retype Password'
          type='password'
        />
        <button
          type='submit'
          disabled={isAuthenticating}
        >
          {isAuthenticating ? 'Submitting...' : 'Sign Up'}
        </button>
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
  })(connect(mapStateToProps, { authUser })(SignupForm)));
