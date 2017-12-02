import React, { Component } from 'react';

//Screens
import DashboardDesktop from './Screens/DashboardDesktop';
import DashboardMobile from './Screens/DashboardMobile';
import DashboardTablet from './Screens/DashboardTablet';



import {Desktop, Mobile, Tablet, Default} from '../../utils/Responsive';


const Dashboard = () => (
  <div className="container">
    <Mobile>
        <DashboardMobile/>        
    </Mobile>
    <Desktop>
        <DashboardDesktop/>
    </Desktop>
    <Tablet>
        <DashboardTablet/>
    </Tablet>
  </div>
)


export default Dashboard;
