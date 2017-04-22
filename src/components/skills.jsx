import React, { Component } from 'react';

class Skills extends Component {
  render() {
    return (
      <div className="skills block">
        <h1>Skills</h1>

        <div className="third-row">
          <div className="frontend third">
            <h2>Web</h2>

            <div className="box">
              React
            </div>
            <div className="box">
              Node
            </div>
            <div className="box">
              Django
            </div>
            <div className="box">
              Sass
            </div>
            <div className="box">
              Spring
            </div>
            <div className="box">
              MongoDB
            </div>
            <div className="box">
              PostgreSQL
            </div>
          </div>

          <div className="backend third">
            <h2>Mobile</h2>

            <div className="box">
              React Native
            </div>
            <div className="box">
              Android
            </div>
            <div className="box">
              iOS with Swift
            </div>
          </div>

          <div className="tools third">
            <h2>Tools</h2>

            <div className="box">
              AWS
            </div>
            <div className="box">
              Google Cloud Platform
            </div>
            <div className="box">
              Photoshop
            </div>
            <div className="box">
              Git
            </div>
            <div className="box">
              XCode
            </div>
            <div className="box">
              Android Studio
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default Skills;
