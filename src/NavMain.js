import React, { Component } from 'react';
import LandingPage from './components/LandingPage';

class NavMain extends Component {
  data = {
    title : "Week 01",
    section : "Here's my submission to the weekly assignment. \n Select below to demonstrate the answer for each number...etc etc etc"
  }
  render() {
    return (
      <>
    <LandingPage data={this.data} />
    </>
    );
  }
}

export default NavMain;