import React, { Component } from 'react';
import FormField from './FormField';
import asyncValidate from './asyncValidate';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { authUser } from '../../actions';

class SignupForm extends Component {
  state = {
    isSubmitting: false
  };

  componentWillUnmount() {
    this.setState({ isSubmitting: false });
  };

  formSubmit = ({ email, password }) => {
    this.props.authUser(email, password, () => {
      this.props.history.push('/');
    });
  };

  render() {
    const { handleSubmit, invalid } = this.props;
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
        <button
          type='submit'
          disabled={invalid}
          onClick={() => this.setState({ isSubmitting: true })}
        >
          {this.state.isSubmitting ? 'Submitting...' : 'Sign Up'}
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

export default withRouter(
  reduxForm({
    validate,
    // asyncValidate,
    // asyncChangeFields: ['email'],
    form: 'value'
  })(connect(null, { authUser })(SignupForm)));
