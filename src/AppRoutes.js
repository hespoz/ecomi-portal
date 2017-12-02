import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import RegisterContainer from './containers/Register/RegisterContainer';
import LoginContainer from './containers/Login/LoginContainer';
import DashboardContainer from './containers/Dashboard/DashboardContainer';

import {Desktop, Mobile, Tablet} from './utils/Responsive';


const AppRoutes = () => (
  <Router>
  <div>
    <Route exact path="/" component={DashboardContainer}/>
    <Route path="/login" component={LoginContainer}/>
    <Route path="/register" component={RegisterContainer}/>
  </div>
  </Router>
)

export default AppRoutes;
