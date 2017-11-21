import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import RegisterContainer from './containers/Register/RegisterContainer';
import LoginContainer from './containers/Login/LoginContainer';

const Home = () => (
  <div className="container">
    <div className="row">
      <div className="col-3">
        <h1>Left</h1>
      </div>
      <div className="offset-6 col-3 text-right">
        <h1>Right</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-md-3 col-lg-3">
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            My Products
            <span class="badge badge-primary badge-pill">7</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            My Campaigns
            <span class="badge badge-primary badge-pill">3</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Balance
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Profile
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Account
          </li>
        </ul>
      </div>
      <div className="col-md-9 col-lg-9">
        Right content
      </div>
    </div>
  </div>
)


const AppRoutes = () => (
  <Router>
  <div>
    <Route exact path="/" component={Home}/>
    <Route path="/login" component={LoginContainer}/>
    <Route path="/register" component={RegisterContainer}/>
  </div>
  </Router>
)

export default AppRoutes;
