import React, { Component } from 'react';
import FormField from './FormField';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addNewUser } from '../../actions';

class Form extends Component {
  formSubmit = values => {
    this.props.addNewUser(values, () => {
      this.props.history.push('/');
    });
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.formSubmit)}>
        <Field
          name='username'
          component={FormField}
          label='Username'
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
        <Field
          name='email'
          component={FormField}
          label='Email'
          type='email'
        />
        <Field
          name='firstname'
          component={FormField}
          label='Firstname'
        />
        <Field
          name='lastname'
          component={FormField}
          label='Lastname'
        />
        <button type='submit'>Sign Up</button>
      </form>
    );
  }
}

function validate(value) {
  const errors = {};
  if (!value.username) {
    errors.username = 'Username Required!'
  }
  if (!value.password) {
    errors.password = 'Password Required!'
  }
  if (!value.email) {
    errors.email = 'Email Required!'
  }
  if (!value.firstname) {
    errors.firstname = 'Firstname Required!'
  }
  if (!value.lastname) {
    errors.lastname = 'Lastname Required!'
  }
  if (value.password !== value.passwordRe) {
    errors.passwordRe = 'Password must match!'
  }
  return errors;
};

export default withRouter(reduxForm({ validate, form: 'value' })(connect(null, { addNewUser })(Form)));
