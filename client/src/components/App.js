import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import requireAuth from './requireAuth';
import Landing from './Landing';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/home' component={requireAuth(Home)} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
