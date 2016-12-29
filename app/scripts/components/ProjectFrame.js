import React from 'react/addons'

export default React.createClass({
  getInitialState: function() {
    return {expanded: false};
  },
  expand: function() {
    if (!this.props.otherPaneExpanded) {
      this.setState({expanded: true});
      this.props.toggleTop();
    }
  },
  shrink: function() {
    this.setState({expanded: false});
    this.props.toggleTop();
  },
	render: function() {
    if (this.state.expanded) {
      return (
        <div className={'projectFrame fullHeight ' + this.props.project.cssClass}>
          <div className={this.props.project.cssClass + '-title projectTitle'}>{this.props.project.title}</div>
          <div className='minimize-x' onClick={this.shrink}>
            <div/>
            <div/>
          </div>
          <div className="imagePane"></div>
          <div className={this.props.project.cssClass + '-body bodyCopy'}>
            <h3 className="subtitle">{this.props.project.subtitle}</h3>
            {this.props.project.body}
            <a href={this.props.project.url} target="_blank" className="projLink">Check It Out<span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span></a>
          </div>
        </div>
      );
    } else {
      return (
        <div
          className={'projectFrame ' + this.props.project.cssClass}
          onClick={this.expand}
        >
          <div className={this.props.project.cssClass + '-title projectTitle'}>{this.props.project.title}</div>
          <div className='minimize-x' onClick={this.shrink}>
            <div/>
            <div/>
          </div>
          <div className="imagePane"></div>
          <div className={this.props.project.cssClass + '-body bodyCopy'}>
            <h3 className="subtitle">{this.props.project.subtitle}</h3>
            {this.props.project.body}
            <a href={this.props.project.url} target="_blank" className="projLink">Check It Out<span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span></a>
          </div>
        </div>
      );
    }
  }
});
