import React from 'react';
import SignupForm from './Form/SignupForm';

const Signup = () => {
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
      <SignupForm />
    </div>
  );
};

export default Signup;
