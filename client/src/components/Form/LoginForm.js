import React, { Component } from 'react';
import FormField from './FormField';
import { Link, withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';
import { Button } from '@material-ui/core';

class LoginForm extends Component {
  formSubmit = ({ loginEmail, loginPassword }) => {
    this.props.loginUser(loginEmail, loginPassword, () => {
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
          color='primary'
          type='submit'
          disabled={isAuthenticating}
        >
          {isAuthenticating ? 'Logging in...' : 'Login'}
        </Button>
        <Button
          component={Link}
          to='/'
          variant='contained'
          color='secondary'
        >
          back
        </Button>
        <p>Don't have an account? <Link to='/signup'>Sign up!</Link></p>
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
