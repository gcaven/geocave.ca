import React, { Component } from 'react';
import Header from './components/header';
import Hero from './components/hero';
import Skills from './components/skills';
import Portfolio from './components/portfolio';
import Contact from './components/contact';

import './styles/App.css';

// const projects = {
//
// }

class App extends Component {
  render() {
    return (
      <div className="universe">
        <Header/>
        <Hero/>
        <div className="below-fold">
          <Skills/>
          <Portfolio/>
          <Contact/>
        </div>
        <div className="footer">
          <p>Back To Top</p>
        </div>
      </div>
    );
  }
}

export default App;
