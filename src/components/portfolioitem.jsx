import React from 'react';

class PortfolioItem extends React.PureComponent {
  render() {
    console.log(this.props.project.image)
    return (
      <a href={this.props.project.url} className="portfolio-item">
        <div
          className={`preview ${this.props.project.isCrapMap ? 'crapmap' : null}`}
           style={{backgroundImage : `url(${this.props.project.image})`}}
          >
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
