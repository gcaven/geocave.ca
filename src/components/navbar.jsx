import React, { Component } from 'react';
import { Link } from 'react-scroll';
import '../styles/App.css';

class NavBar extends Component {

  render() {
    return(
      <div className="nav-bar">
        <div className="entry-container">
          <Link className="entry" activeClass="active" to="skills" spy={true} smooth={true}>Skills</Link>
          <Link className="entry" activeClass="active" to="portfolio" spy={true} smooth={true}>Portfolio</Link>
          <Link className="entry" activeClass="active" to="contact" spy={true} smooth={true}>Contact</Link>
        </div>
      </div>
    )
  }

}

export default NavBar;
