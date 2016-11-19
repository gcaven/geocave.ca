import React from 'react/addons'

export default React.createClass({
  getInitialState: function() {
    return {expanded: false};
  },
  toggleExpansion: function() {
    if (!this.props.otherPaneExpanded) {
      this.setState({expanded: !this.state.expanded});
      this.props.toggleTop();
    }
  },
	render: function() {
		return (
      <div>
        { this.state.expanded ?
          <div className={'projectFrame fullHeight ' + this.props.project.cssClass}>
            <div className={this.props.project.cssClass + '-title projectTitle'}>{this.props.project.title}</div>
            <div
              className="glyphicon glyphicon-remove-circle"
              onClick={this.toggleExpansion}
            />
            <div className="imagePane"></div>
            <div className={this.props.project.cssClass + '-body bodyCopy'}>
              <h3 className="subtitle">{this.props.project.subtitle}</h3>
              {this.props.project.body}
              <a href={this.props.project.url} target="_blank" className="projLink">Check It Out<span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span></a>
            </div>
          </div>
        :
          <div
            className={'projectFrame ' + this.props.project.cssClass}
            onClick={this.toggleExpansion}
          >
            <div className={this.props.project.cssClass + '-title projectTitle'}>{this.props.project.title}</div>
            <div className="glyphicon glyphicon-remove-circle"></div>
            <div className="imagePane"></div>
            <div className={this.props.project.cssClass + '-body bodyCopy'}>
              <h3 className="subtitle">{this.props.project.subtitle}</h3>
              {this.props.project.body}
              <a href={this.props.project.url} target="_blank" className="projLink">Check It Out<span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span></a>
            </div>
          </div>
        }
      </div>
    )
  }
});
