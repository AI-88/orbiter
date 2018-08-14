import React, { Component } from 'react';
import FormField from './FormField';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';

class LoginForm extends Component {
  formSubmit = ({ email, password }) => {
    this.props.loginUser(email, password);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.formSubmit)}>
        <Field
          name='email'
          component={FormField}
          label='Email'
        />
        <Field
          name='password'
          component={FormField}
          label='Password'
          type='password'
        />
        <button type='submit'>Login</button>
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
  return errors;
};

export default reduxForm({
  validate,
  form: 'value'
})(connect(null, { loginUser })(LoginForm));
