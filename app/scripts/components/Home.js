import React from 'react/addons'
import MiniRouter from 'react-mini-router'
import ProjectFrame from './ProjectFrame'

var projects = [
	{
		title: "RZA Sports",
		cssClass: "rza",
		subtitle: "Bold Design for B-Ball",
		url: "http://www.rzasports.com",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio nunc, tristique ut facilisis id, accumsan vel est. Nullam imperdiet vel lorem eget facilisis. Sed sem risus, porta ac justo at, vehicula feugiat est. In gravida purus lectus, et aliquet ipsum sollicitudin vel. Vestibulum venenatis nunc ut malesuada maximus. Nullam ac accumsan mauris, vel tincidunt mauris. Nulla metus ligula, posuere in turpis feugiat, laoreet commodo nibh. Donec varius tristique risus, ut vulputate quam sodales vitae. Nunc ornare hendrerit risus ut ultrices. Suspendisse tincidunt orci sem, viverra mattis est efficitur eget. Proin hendrerit finibus sapien, eu varius mauris scelerisque quis."
	},
	{
		title: "Brave New World",
		cssClass: "bnw",
		subtitle: "Self-Promotion Taken to New Heights",
		url: "http://www.bravenew.world",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio nunc, tristique ut facilisis id, accumsan vel est. Nullam imperdiet vel lorem eget facilisis. Sed sem risus, porta ac justo at, vehicula feugiat est. In gravida purus lectus, et aliquet ipsum sollicitudin vel. Vestibulum venenatis nunc ut malesuada maximus. Nullam ac accumsan mauris, vel tincidunt mauris. Nulla metus ligula, posuere in turpis feugiat, laoreet commodo nibh. Donec varius tristique risus, ut vulputate quam sodales vitae. Nunc ornare hendrerit risus ut ultrices. Suspendisse tincidunt orci sem, viverra mattis est efficitur eget. Proin hendrerit finibus sapien, eu varius mauris scelerisque quis."
	},
	{
		title: "TCE Interactive Resources",
		cssClass: "tce",
		subtitle: "A Patriotic Development",
		url: "http://www.thecanadianencyclopedia.ca/en/learningcentre/",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio nunc, tristique ut facilisis id, accumsan vel est. Nullam imperdiet vel lorem eget facilisis. Sed sem risus, porta ac justo at, vehicula feugiat est. In gravida purus lectus, et aliquet ipsum sollicitudin vel. Vestibulum venenatis nunc ut malesuada maximus. Nullam ac accumsan mauris, vel tincidunt mauris. Nulla metus ligula, posuere in turpis feugiat, laoreet commodo nibh. Donec varius tristique risus, ut vulputate quam sodales vitae. Nunc ornare hendrerit risus ut ultrices. Suspendisse tincidunt orci sem, viverra mattis est efficitur eget. Proin hendrerit finibus sapien, eu varius mauris scelerisque quis."
	},
	// {
	// 	title: "Mercury for Reddit",
	// 	cssClass: "reddit",
	// 	subtitle: "The Frontpage of Your iPad",
	// 	url: "http://www.apple.com",
	// 	body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio nunc, tristique ut facilisis id, accumsan vel est. Nullam imperdiet vel lorem eget facilisis. Sed sem risus, porta ac justo at, vehicula feugiat est. In gravida purus lectus, et aliquet ipsum sollicitudin vel. Vestibulum venenatis nunc ut malesuada maximus. Nullam ac accumsan mauris, vel tincidunt mauris. Nulla metus ligula, posuere in turpis feugiat, laoreet commodo nibh. Donec varius tristique risus, ut vulputate quam sodales vitae. Nunc ornare hendrerit risus ut ultrices. Suspendisse tincidunt orci sem, viverra mattis est efficitur eget. Proin hendrerit finibus sapien, eu varius mauris scelerisque quis."
	// },
	// {
	// 	title: "Space Viking",
	// 	cssClass: "viking",
	// 	subtitle: "Børk Børk",
	// 	url: "http://www.spaceviking.com",
	// 	body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio nunc, tristique ut facilisis id, accumsan vel est. Nullam imperdiet vel lorem eget facilisis. Sed sem risus, porta ac justo at, vehicula feugiat est. In gravida purus lectus, et aliquet ipsum sollicitudin vel. Vestibulum venenatis nunc ut malesuada maximus. Nullam ac accumsan mauris, vel tincidunt mauris. Nulla metus ligula, posuere in turpis feugiat, laoreet commodo nibh. Donec varius tristique risus, ut vulputate quam sodales vitae. Nunc ornare hendrerit risus ut ultrices. Suspendisse tincidunt orci sem, viverra mattis est efficitur eget. Proin hendrerit finibus sapien, eu varius mauris scelerisque quis."
	// }
]

export default React.createClass({
	getInitialState: function() {
		return {projectExpanded: false}
	},
	toggleProjectFrameTop: function() {
		this.setState({projectExpanded: !this.state.projectExpanded});
	},
	renderProjectFrames: function() {
		var frames = [];
		for (var i = 0; i < projects.length; i++) {
			frames.push(<ProjectFrame key={i} project={projects[i]} toggleTop={this.toggleProjectFrameTop} otherPaneExpanded={this.state.projectExpanded}/>);
		}
		return frames;
	},
	render: function() {
		frames = this.renderProjectFrames();
		return (
			<div className="homepage">
				<div className="pane leftPane">
					<div className="titleBlock">
						<h1>Geoffrey Caven</h1>
						<h2>I Make Computer Stuff</h2>

						<div className="divider"></div>

						<div className="linkContainer">
							<div className="mainLink-div resume"><a href="/files/resume.pdf" target="_blank" className="mainLink">Resume</a></div>
							<div className="slash"><span>/</span></div>
							<div className="mainLink-div github"><a href="https://github.com/gcaven" target="_blank" className="mainLink">Github</a></div>
							<div className="slash"><span>/</span></div>
							<div className="mainLink-div linkedin"><a href="http://linkedin.com" target="_blank" className="mainLink">LinkedIn</a></div>
						</div>
					</div>
				</div>
				<div className="pane rightPane">
					{this.state.projectExpanded ?
						<div className="aboveStack noHeight"/>
					:
						<div className="aboveStack"/>
					}
					<div className="projectStack">
						{frames}
					</div>
					<div className="belowStack"/>
				</div>
			</div>
		)
	}
})
