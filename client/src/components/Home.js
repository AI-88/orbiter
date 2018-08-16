import React from 'react';
import requireAuth from './requireAuth';

const Home = () => {
  return (
    <h1>Welcome to Home Route</h1>
  );
};

export default requireAuth(Home);
