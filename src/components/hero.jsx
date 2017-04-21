import React, { Component } from 'react';

import NavBar from './navbar'
import '../styles/App.css';

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div className="text-box">
          <h1>Geoffrey Caven</h1>
          <h2>Web & Mobile Developer</h2>
          <NavBar/>
        </div>
      </div>
    );
  }
}

export default Hero;
