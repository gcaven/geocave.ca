import React, { Component } from 'react';

class PortfolioItem extends Component {
  render() {
    return (
      <div className="portfolio-item">
        <div className="preview">

        </div>
        <div className="text">
          <div className="gradient"/>
          <h2>{this.props.project.title}</h2>
          <h3>{this.props.project.subtitle}</h3>
        </div>
      </div>
    );
  }
}

export default PortfolioItem;
