import React, { Component } from 'react';
import FormField from './FormField';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';

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
        <p style={{ color: 'red' }}>{errorMessage.message}</p>
        <button type='submit' disabled={isAuthenticating}>{isAuthenticating ? 'Logging in...' : 'Login'}</button>
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

function mapStateToProps({ userAuth }) {
  return {
    userAuth
  };
};

export default withRouter(reduxForm({
  validate,
  form: 'value'
})(connect(mapStateToProps, { loginUser })(LoginForm)));
