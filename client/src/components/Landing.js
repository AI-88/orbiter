import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Landing = () => {
  const style = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  };

  return (
    <div style={style.container}>
      <div>
        <h1>Welcome to Orbiter!</h1>
        <Button
          component={Link}
          to='/login'
          variant='contained'
          color='primary'
        >
          login
        </Button>
        <Button
          component={Link}
          to='/signup'
          variant='contained'
          color='secondary'
        >
          signup
        </Button>
      </div>
    </div>
  );
}

export default Landing;
