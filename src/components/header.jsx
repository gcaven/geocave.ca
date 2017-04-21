import React, { Component } from 'react';

import NavBar from './navbar'
import '../styles/App.css';

class Header extends Component {
  constructor(props) {
		super(props);

		this.state = {
			headerClass: ""
		};
	}

  componentDidMount() {
    this.bindScroll();
  }

  componentWillUnmount() {
    this.unbindScroll();
  }

  bindScroll() {
    window.addEventListener(
      'scroll',
      this.handleScroll
    );
  }

  unbindScroll() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const top = document.documentElement.scrollTop
      || document.body.parentNode.scrollTop
      || document.body.scrollTop

    if (top > 500) {
      this.setState({headerClass: "visible"});
    } else {
      this.setState({headerClass: ""})
    }
  }

  render() {
    return (
      <div className={"header " + this.state.headerClass}>
        <h1 id="brand">Geoffrey Caven</h1>
        <NavBar/>
      </div>
    );
  }
}

export default Header;
