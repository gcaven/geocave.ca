import React from 'react/addons'
import MiniRouter from 'react-mini-router'
import ProjectFrame from './ProjectFrame'

var projects = [
	{title: "RZA Sports", cssClass: "rza", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio nunc, tristique ut facilisis id, accumsan vel est. Nullam imperdiet vel lorem eget facilisis. Sed sem risus, porta ac justo at, vehicula feugiat est. In gravida purus lectus, et aliquet ipsum sollicitudin vel. Vestibulum venenatis nunc ut malesuada maximus. Nullam ac accumsan mauris, vel tincidunt mauris. Nulla metus ligula, posuere in turpis feugiat, laoreet commodo nibh. Donec varius tristique risus, ut vulputate quam sodales vitae. Nunc ornare hendrerit risus ut ultrices. Suspendisse tincidunt orci sem, viverra mattis est efficitur eget. Proin hendrerit finibus sapien, eu varius mauris scelerisque quis. Vestibulum at orci sit amet magna sodales mattis vel vel mauris. Nullam eget tristique magna, ut molestie elit. Phasellus ex ex, dapibus dignissim dui sit amet, rhoncus posuere massa."},
	{title: "TCE Interactive Resources", cssClass: "tce", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio nunc, tristique ut facilisis id, accumsan vel est. Nullam imperdiet vel lorem eget facilisis. Sed sem risus, porta ac justo at, vehicula feugiat est. In gravida purus lectus, et aliquet ipsum sollicitudin vel. Vestibulum venenatis nunc ut malesuada maximus. Nullam ac accumsan mauris, vel tincidunt mauris. Nulla metus ligula, posuere in turpis feugiat, laoreet commodo nibh. Donec varius tristique risus, ut vulputate quam sodales vitae. Nunc ornare hendrerit risus ut ultrices. Suspendisse tincidunt orci sem, viverra mattis est efficitur eget. Proin hendrerit finibus sapien, eu varius mauris scelerisque quis. Vestibulum at orci sit amet magna sodales mattis vel vel mauris. Nullam eget tristique magna, ut molestie elit. Phasellus ex ex, dapibus dignissim dui sit amet, rhoncus posuere massa."},
	{title: "Brave New World", cssClass: "bnw", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio nunc, tristique ut facilisis id, accumsan vel est. Nullam imperdiet vel lorem eget facilisis. Sed sem risus, porta ac justo at, vehicula feugiat est. In gravida purus lectus, et aliquet ipsum sollicitudin vel. Vestibulum venenatis nunc ut malesuada maximus. Nullam ac accumsan mauris, vel tincidunt mauris. Nulla metus ligula, posuere in turpis feugiat, laoreet commodo nibh. Donec varius tristique risus, ut vulputate quam sodales vitae. Nunc ornare hendrerit risus ut ultrices. Suspendisse tincidunt orci sem, viverra mattis est efficitur eget. Proin hendrerit finibus sapien, eu varius mauris scelerisque quis. Vestibulum at orci sit amet magna sodales mattis vel vel mauris. Nullam eget tristique magna, ut molestie elit. Phasellus ex ex, dapibus dignissim dui sit amet, rhoncus posuere massa."},
	{title: "Trailer Park Boys", cssClass: "tpb", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio nunc, tristique ut facilisis id, accumsan vel est. Nullam imperdiet vel lorem eget facilisis. Sed sem risus, porta ac justo at, vehicula feugiat est. In gravida purus lectus, et aliquet ipsum sollicitudin vel. Vestibulum venenatis nunc ut malesuada maximus. Nullam ac accumsan mauris, vel tincidunt mauris. Nulla metus ligula, posuere in turpis feugiat, laoreet commodo nibh. Donec varius tristique risus, ut vulputate quam sodales vitae. Nunc ornare hendrerit risus ut ultrices. Suspendisse tincidunt orci sem, viverra mattis est efficitur eget. Proin hendrerit finibus sapien, eu varius mauris scelerisque quis. Vestibulum at orci sit amet magna sodales mattis vel vel mauris. Nullam eget tristique magna, ut molestie elit. Phasellus ex ex, dapibus dignissim dui sit amet, rhoncus posuere massa."},
	{title: "Space Viking", cssClass: "viking", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio nunc, tristique ut facilisis id, accumsan vel est. Nullam imperdiet vel lorem eget facilisis. Sed sem risus, porta ac justo at, vehicula feugiat est. In gravida purus lectus, et aliquet ipsum sollicitudin vel. Vestibulum venenatis nunc ut malesuada maximus. Nullam ac accumsan mauris, vel tincidunt mauris. Nulla metus ligula, posuere in turpis feugiat, laoreet commodo nibh. Donec varius tristique risus, ut vulputate quam sodales vitae. Nunc ornare hendrerit risus ut ultrices. Suspendisse tincidunt orci sem, viverra mattis est efficitur eget. Proin hendrerit finibus sapien, eu varius mauris scelerisque quis. Vestibulum at orci sit amet magna sodales mattis vel vel mauris. Nullam eget tristique magna, ut molestie elit. Phasellus ex ex, dapibus dignissim dui sit amet, rhoncus posuere massa."}
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
		for (var i = 0; i < 5; i++) {
			frames.push(<ProjectFrame key={i} project={projects[i]} toggleTop={this.toggleProjectFrameTop}/>);
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
						<h2>Full-Stack Web Developer</h2>

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
