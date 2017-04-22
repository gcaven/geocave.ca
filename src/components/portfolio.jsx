import React, { Component } from 'react';

import Title from './title';
import PortfolioItem from './portfolioitem';

const projects = [
  {
    title: "RZA Sports",
    subtitle: "Bold Design for B-Ball",
    url: "http://rzasports.com",
    skills: ["React", "Sass"]
  },
  {
    title: "TCE Interactive Resources",
    subtitle: "A Patriotic Development",
    url: "http://www.thecanadianencyclopedia.ca/en/learningcentre/",
    skills: ["Django"]
  },
  {
    title: "Brave New World",
    subtitle: "Self-Promotion Taken to New Heights",
    url: "http://bravenew.world",
    skills: ["React", "Sass"]
  },
  {
    title: "CrapMap",
    subtitle: "For When You Have To Go, On The Go",
    url: "https://github.com/salockhart/CSCI-4176-Project---Team-2",
    skills: ["Android", "Node", "MongoDB", "Android Studio"]
  },
  {
    title: "CotUDB",
    subtitle: "Program Your Own Robotic Dictator",
    url: "",
    skills: ["React Native", "Django", "XCode"]
  },
  {
    title: "Mercury For Reddit",
    subtitle: "The Swiftest Way To Read",
    url: "",
    skills: ["iOS With Swift", "XCode"]
  }
]

class Portfolio extends Component {
  renderProjects() {
    let projectsRendered = [];
    for (var i = 0; i < projects.length; i++) {
      projectsRendered.push(<PortfolioItem key={"project-" + i} project={projects[i]}/>);
    }
    console.log(projectsRendered);
    return projectsRendered;
  }

  render() {
    let projectsRendered = this.renderProjects();
    console.log(projectsRendered);
    return (
      <div className="portfolio block">
        <Title text={"Portfolio"}/>

        <div className="projects">
          {projectsRendered}
        </div>
      </div>
    );
  }
}

export default Portfolio;
