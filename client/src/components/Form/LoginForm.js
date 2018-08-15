import React, { Component } from 'react';
import FormField from './FormField';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { loginUser, userLoginReset } from '../../actions';

class LoginForm extends Component {
  formSubmit = ({ email, password }) => {
    this.props.loginUser(email, password);
  };

  componentWillUnmount() {
    this.props.userLoginReset();
  };

  render() {
    const { handleSubmit, userLogin: { isLoggingIn, data} } = this.props;
    console.log(data);
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
        <p style={{ color: 'red', fontWeight: 'bold' }}>{data.errors ? data.message : ''}</p>
        <button type='submit' disabled={isLoggingIn}>{isLoggingIn ? 'Logging in...' : 'Login'}</button>
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

function mapStateToProps({ userLogin }) {
  return {
    userLogin
  };
};

export default reduxForm({
  validate,
  form: 'value'
})(connect(mapStateToProps, { loginUser, userLoginReset })(LoginForm));
