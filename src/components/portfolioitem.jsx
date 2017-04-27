import React, { Component } from 'react';

class PortfolioItem extends Component {
  render() {
    return (
      <a href={this.props.project.url} className="portfolio-item">
        <div className="preview">
          <div className="text">
            <h2>{this.props.project.title}</h2>
            <h3>{this.props.project.subtitle}</h3>
            <div className="skills-list">
              {this.props.project.skills}
            </div>
          </div>
        </div>
      </a>
    );
  }
}

export default PortfolioItem;
