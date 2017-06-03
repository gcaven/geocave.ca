import React, { Component } from 'react';
import { scrollSpy, Events, animateScroll } from 'react-scroll';

import Header from './components/header';
import Hero from './components/hero';
import Skills from './components/skills';
import Portfolio from './components/portfolio';
import Contact from './components/contact';

import './styles/App.css';

class App extends Component {
  componentDidMount() {

    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();

  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  scrollToTop() {
    animateScroll.scrollToTop();
  }

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
          <p onClick={this.scrollToTop}>Back To Top</p>
        </div>
      </div>
    );
  }
}

export default App;
