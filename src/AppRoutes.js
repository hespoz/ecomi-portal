import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import RegisterContainer from './containers/Register/RegisterContainer';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Login = () => (
  <div>
    <h2>Login</h2>
  </div>
)

const AppRoutes = () => (
  <Router>
  <div>
    <Route exact path="/" component={Home}/>
    <Route path="/login" component={Login}/>
    <Route path="/register" component={RegisterContainer}/>
  </div>
  </Router>
)

export default AppRoutes;
