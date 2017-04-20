import React, { Component } from 'react';
import Header from './components/header'
import Hero from './components/hero'

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="universe">
        <Header/>
        <Hero/>
        <div className="below-fold">

        </div>
      </div>
    );
  }
}

export default App;
