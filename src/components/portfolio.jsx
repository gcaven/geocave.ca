import React, { Component } from 'react';

import Title from './title';
import PortfolioItem from './portfolioitem';
import SkillItem from './skillitem';

import ReactJS from '../assets/icons/reactjs.svg'
import Node from '../assets/icons/nodejs.svg';
import Django from '../assets/icons/django.svg';
import Sass from '../assets/icons/sass.svg';
import Mongo from '../assets/icons/mongodb.svg';

import Android from '../assets/icons/android.svg';

import AndroidStudio from '../assets/icons/androidstudio.svg';
import Heroku from '../assets/icons/heroku.svg';

const skill_items = {
  "React": (<SkillItem label={"React"} icon={ReactJS}/>),
  "Sass": (<SkillItem label={"Sass"} icon={Sass}/>),
  "Django": (<SkillItem label={"Django"} icon={Django}/>),
  "Android": (<SkillItem label={"Android"} icon={Android}/>),
  "Node": (<SkillItem label={"Node"} icon={Node}/>),
  "MongoDB": (<SkillItem label={"MongoDB"} icon={Mongo}/>),
  "Android Studio": (<SkillItem label={"Android Studio"} icon={AndroidStudio}/>),
  "Heroku": (<SkillItem label={"Heroku"} icon={Heroku}/>)
}

const projects = [
  {
    title: "RZA Sports",
    subtitle: "Bold Design for B-Ball",
    url: "http://rzasports.com",
    skills: [skill_items["React"], skill_items["Sass"]]
  },
  {
    title: "TCE Interactive Resources",
    subtitle: "A Patriotic Development",
    url: "http://www.thecanadianencyclopedia.ca/en/learningcentre/",
    skills: [skill_items["Django"], skill_items["Sass"]]
  },
  {
    title: "Brave New World",
    subtitle: "Self-Promotion Taken to New Heights",
    url: "http://bravenew.world",
    skills: [skill_items["React"], skill_items["Sass"]]
  },
  {
    title: "CrapMap",
    subtitle: "For When You Have To Go, On The Go",
    url: "https://github.com/salockhart/CSCI-4176-Project---Team-2",
    skills: [skill_items["Android"], skill_items["Node"], skill_items["MongoDB"], skill_items["Android Studio"]]
  },
  {
    title: "caven.codes",
    subtitle: "You're looking at it right now",
    url: "http://caven.codes",
    skills: [skill_items["React"], skill_items["Sass"]]
  }
  // {
  //   title: "CotUDB",
  //   subtitle: "Program Your Own Robotic Dictator",
  //   url: "",
  //   skills: ["React Native", "Django", "XCode"]
  // },
  // {
  //   title: "Mercury For Reddit",
  //   subtitle: "The Swiftest Way To Read",
  //   url: "https://github.com/gcaven/mercury-for-reddit",
  //   skills: ["iOS With Swift", "XCode"]
  // }
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
