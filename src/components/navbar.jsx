import React, { Component } from 'react';
import '../styles/App.css';

class NavBar extends Component {

  render() {
    return(
      <div className="nav-bar">
        <div className="entry-container">
          <div className="entry active">Skills</div>
          <div className="entry">Portfolio</div>
          <div className="entry">Contact</div>
        </div>
      </div>
    )
  }

}

export default NavBar;
