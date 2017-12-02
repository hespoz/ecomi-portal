import React, { Component } from 'react';

import Header from '../../commons/Header';

const DashboardDesktop = props => {

    return (
        <div>
            <Header className="row">
                <div className="col-3">
                    <h1>Left</h1>
                </div>
                <div className="offset-6 col-3 text-right">
                    <h1>Right</h1>
                </div>
            </Header>
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
  );
}

export default DashboardDesktop