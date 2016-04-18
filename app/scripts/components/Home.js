import React from 'react/addons'
import MiniRouter from 'react-mini-router'

export default React.createClass({
	render: function() {
		return (
			<div className="homepage">
					<video autoPlay="autoplay" loop="loop" className="splash">
            <source src="videos/splash.mp4" type="video/mp4" />
					</video>
					<div className="splash-overlay">
						<h1>Geoff Caven - Developer & Student</h1>
					</div>
				<div className="container belowFold-container">
					<div className="homepage-belowFold">
						<div className="pitch">
							<h1>About Me</h1>
							<p>
								will work for money
								<br/>
								contact me!
							</p>
						</div>
						<div className="skills">
							<h1>Things I Can Do</h1>

							<div className="skillRow">
								<div className="skillBlock html"/>
								<div className="skillBlock css"/>
								<div className="skillBlock js"/>
								<div className="skillBlock react"/>
								<div className="skillBlock sass"/>
								<div className="skillBlock java"/>
							</div>
							<div className="skillRow">
								<div className="skillBlock c"/>
								<div className="skillBlock cplus"/>
								<div className="skillBlock spring"/>
								<div className="skillBlock postgres"/>
								<div className="skillBlock mysql"/>
								<div className="skillBlock laravel"/>
							</div>

						</div>
						<div className="projects">
							<h1>Things I've Done</h1>

							<div className="row">
								<div className="col-sm-4 col-sm-offset-1 projectBlock">
									<a href="www.trailerparkboys.com">Trailer Park Boys</a>
								</div>
								<div className="col-sm-2">

								</div>
								<div className="col-sm-4 projectBlock">

								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		)
	}
})
