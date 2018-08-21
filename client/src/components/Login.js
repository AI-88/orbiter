import React from 'react';
import LoginForm from './Form/LoginForm';

const Login = () => {
  const style = {
    container: {
      height: '100vh',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  };

  return (
    <div style={style.container}>
      <LoginForm />
    </div>
  );
};

export default Login;
