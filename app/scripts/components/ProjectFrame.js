import React from 'react/addons'

export default React.createClass({
  getInitialState: function() {
    return {expanded: false};
  },
  toggleExpansion: function() {
    this.setState({expanded: !this.state.expanded});
    this.props.toggleTop();
    var _this = this;
    if (!this.state.expanded) {
      setTimeout(function() {
        console.log($('.' + _this.props.project.cssClass + '-body'));
        $('.' + _this.props.project.cssClass + '-body').addClass('visible');
      }, 600);
    } else {
      setTimeout(function() {
        console.log($('.' + _this.props.project.cssClass + '-body'));
        $('.' + _this.props.project.cssClass + '-body').removeClass('visible');
      }, 0);
    }
  },
	render: function() {
		return (
      <div>
        { this.state.expanded ?
          <div
            className={'projectFrame fullHeight ' + this.props.project.cssClass}
            onClick={this.toggleExpansion}
          >
            <div>{this.props.project.title}</div>
            <div className={this.props.project.cssClass + '-body bodyCopy'}>
              {this.props.project.body}
            </div>
          </div>
        :
          <div
            className={'projectFrame ' + this.props.project.cssClass}
            onClick={this.toggleExpansion}
          >
            <div>{this.props.project.title}</div>
          </div>
        }
      </div>
    )
  }
});
