import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <h1>Landing Route</h1>
      <Button
        component={Link}
        to='/login'
        variant='contained'
        color='secondary'
      >
        login
      </Button>
      <Button
        component={Link}
        to='/signup'
        variant='contained'
        color='primary'
      >
        signup
      </Button>
    </div>
  );
}

export default Landing;
