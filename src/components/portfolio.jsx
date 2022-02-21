import React, { Component } from 'react';

import Title from './title';
import PortfolioItem from './portfolioitem';
import SkillItem from './skillitem';

import ReactJS from '../assets/icons/reactjs.svg';
import Redux from '../assets/icons/redux.svg';
import Node from '../assets/icons/nodejs.svg';
// import Django from '../assets/icons/django.svg';
import Sass from '../assets/icons/sass.svg';
import Svelte from '../assets/icons/svelte.svg';
import Mongo from '../assets/icons/mongodb.svg';
import Apollo from '../assets/icons/apollo.svg';
import GraphQL from '../assets/icons/graphql.svg';
import Jekyll from '../assets/icons/jekyll.svg';
import VanillaJS from '../assets/icons/js.svg';
import VanillaCSS from '../assets/icons/css.svg';

import Android from '../assets/icons/android.svg';

import AndroidStudio from '../assets/icons/androidstudio.svg';

import nbx from '../assets/images/nbx.jpg';
import harbr from '../assets/images/harbr.jpg';
import dloft from '../assets/images/dloft.jpg';
import cfretail from '../assets/images/cf-retail.jpg';
// import buk from '../assets/images/buk.jpg';
import rza from '../assets/images/rza.jpg';
// import bnw from '../assets/images/bnw.jpg';
// import tce from '../assets/images/tce.jpg';
import crapmap from '../assets/images/crapmap.jpg';
import caven from '../assets/images/caven.jpg';

const projects = [
  {
    title: "NBX",
    subtitle: "Welcome to the Future of Digital Wealth",
    url: "https://nbx.com",
    skills: [
      <SkillItem label={"React"} icon={ReactJS} key={0}/>,
      <SkillItem label={"Redux"} icon={Redux} key={1}/>,
      <SkillItem label={"Sass"} icon={Sass} key={2}/>,
      <SkillItem label={"Svelte"} icon={Svelte} key={3}/>,
    ],
    image: nbx
  },
  {
    title: "Harbr Mobile",
    subtitle: "Mobile Construction Management",
    url: "http://www.harbr.com/",
    skills: [
      <SkillItem label={"React Native"} icon={ReactJS} key={0}/>,
      <SkillItem label={"Redux"} icon={Redux} key={1}/>,
      <SkillItem label={"Apollo"} icon={Apollo} key={2}/>,
      <SkillItem label={"GraphQL"} icon={GraphQL} key={3}/>,
     ],
    image: harbr
  },
  {
    title: "Harbr Platform",
    subtitle: "Web Construction Management",
    url: "http://www.harbr.com/",
    skills: [
      <SkillItem label={"React"} icon={ReactJS} key={0}/>,
      <SkillItem label={"Redux"} icon={Redux} key={1}/>,
      <SkillItem label={"Apollo"} icon={Apollo} key={2}/>,
      <SkillItem label={"GraphQL"} icon={GraphQL} key={3}/>,
     ],
    image: harbr
  },
  {
    title: "Deanne Loft Portfolio",
    subtitle: "Helping to Land the Dream Job",
    url: "http://www.deanneloft.com/",
    skills: [
      <SkillItem label={"Jekyll"} icon={Jekyll} key={0}/>,
      <SkillItem label={"Vanilla JS"} icon={VanillaJS} key={1}/>,
      <SkillItem label={"CSS3"} icon={VanillaCSS} key={2}/>,
     ],
    image: dloft
  },
  {
    title: "Cadillac Fairview Retail",
    subtitle: "A Little Retail Therapy",
    url: "http://www.cfretail.ca/",
    skills: [
      <SkillItem label={"React"} icon={ReactJS} key={0}/>,
      <SkillItem label={"Redux"} icon={Redux} key={1}/>,
      <SkillItem label={"Node"} icon={Node} key={2}/>,
      <SkillItem label={"MongoDB"} icon={Mongo} key={3}/>,
     ],
    image: cfretail
  },
  // {
  //   title: "Buk",
  //   subtitle: "The Best Platform For Food",
  //   url: "https://www.bukapp.co/",
  //   skills: [
  //     <SkillItem label={"React"} icon={ReactJS} key={0}/>,
  //     <SkillItem label={"Redux"} icon={Redux} key={1}/>,
  //     <SkillItem label={"Sass"} icon={Sass} key={2}/>,
  //     <SkillItem label={"Django"} icon={Django} key={3}/>,
  //    ],
  //   image: buk
  // },
  {
    title: "RZA Sports",
    subtitle: "Bold Design for B-Ball",
    url: "http://rzasports.com",
    skills: [
      <SkillItem label={"React"} icon={ReactJS} key={0}/>,
      <SkillItem label={"Sass"} icon={Sass} key={1}/>
     ],
    image: rza
  },
  // {
  //   title: "TCE Interactive Resources",
  //   subtitle: "A Patriotic Development",
  //   url: "http://www.thecanadianencyclopedia.ca/en/learningcentre/",
  //   skills: [
  //     <SkillItem label={"Django"} icon={Django} key={0}/>,
  //     <SkillItem label={"Sass"} icon={Sass} key={1}/>
  //   ],
  //   image: tce
  // },
  // {
  //   title: "Brave New World",
  //   subtitle: "Self-Promotion Taken to New Heights",
  //   url: "http://bravenew.world",
  //   skills: [
  //     <SkillItem label={"React"} icon={ReactJS} key={0}/>,
  //     <SkillItem label={"Sass"} icon={Sass} key={1}/>
  //   ],
  //   image: bnw
  // },
  {
    title: "CrapMap",
    subtitle: "For When You Have To Go, On The Go",
    url: "https://github.com/salockhart/CSCI-4176-Project---Team-2",
    skills: [
      <SkillItem label={"Android"} icon={Android} key={0}/>,
      <SkillItem label={"Node"} icon={Node} key={1}/>,
      <SkillItem label={"MongoDB"} icon={Mongo} key={2}/>,
      <SkillItem label={"Android Studio"} icon={AndroidStudio} key={3}/>
    ],
    image: crapmap,
    isCrapMap: true
  },
  {
    title: "caven.codes",
    subtitle: "You're looking at it right now",
    url: "http://caven.codes",
    skills: [
      <SkillItem label={"React"} icon={ReactJS} key={0}/>,
      <SkillItem label={"Sass"} icon={Sass} key={1}/>
    ],
    image: caven
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
  render() {
    return (
      <div className="portfolio block" id="portfolio">
        <Title text={"Portfolio"}/>

        <div className="projects">
          {projects.map((item,index) => {
            return(
              <PortfolioItem key={"project-" + index} project={projects[index]}/>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Portfolio;
