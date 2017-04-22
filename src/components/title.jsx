import React, { Component } from 'react';

class Title extends Component {
  render() {
    return (
      <div className="block-title">
        <div className="accent-container">
          <div className="accent left"/>
          <h1>{this.props.text}</h1>
          <div className="accent right"/>
        </div>
      </div>
    );
  }
}

export default Title;
