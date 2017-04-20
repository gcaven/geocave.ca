import React, { Component } from 'react';
import '../styles/App.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="entry-container">
          <div className="entry">Skills</div>
          <div className="entry">Portfolio</div>
          <div className="entry">Contact</div>
        </div>
      </div>
    );
  }
}

export default Header;
