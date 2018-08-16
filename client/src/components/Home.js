import React from 'react';
import requireAuth from './requireAuth';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Home Route</h1>
    </div>
  );
};

export default requireAuth(Home);
