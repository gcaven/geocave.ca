import React from 'react';

class SkillItem extends React.PureComponent {
  render() {
    return (
      <div className="skill-item">
        <img src={this.props.icon} alt={this.props.label}/>
        <div className="label">{this.props.label}</div>
      </div>
    );
  }
}

export default SkillItem;
