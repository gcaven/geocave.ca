import React, { Component } from 'react';
import Title from './title';
import SkillItem from './skillitem';

import ReactJS from '../assets/icons/reactjs.svg';
import Node from '../assets/icons/nodejs.svg';
import Django from '../assets/icons/django.svg';
import Sass from '../assets/icons/sass.svg';
import Mongo from '../assets/icons/mongodb.svg';
import Spring from '../assets/icons/spring.svg';
import Postgres from '../assets/icons/postgres-alt.svg';

import Android from '../assets/icons/android.svg';
import Swift from '../assets/icons/swift.svg';

import AWS from '../assets/icons/aws.svg';
import GCP from '../assets/icons/gcp.svg';
import XCode from '../assets/icons/xcode.png';
import AndroidStudio from '../assets/icons/androidstudio.svg';

class Skills extends Component {
  render() {
    return (
      <div className="skills block">
        <Title text={"Skills"}/>

        <div className="third-row">
          <div className="frontend third">
            <div className="third-title">
              <h2>Web</h2>
              <div className="underline"/>
            </div>

            <SkillItem label={"React"} icon={ReactJS}/>
            <SkillItem label={"Node"} icon={Node}/>
            <SkillItem label={"Django"} icon={Django}/>
            <SkillItem label={"Sass"} icon={Sass}/>
            <SkillItem label={"Spring"} icon={Spring}/>
            <SkillItem label={"MongoDB"} icon={Mongo}/>
            <SkillItem label={"PostgreSQL"} icon={Postgres}/>
          </div>

          <div className="backend third">
            <div className="third-title">
              <h2>Mobile</h2>
              <div className="underline"/>
            </div>

            <SkillItem label={"React Native"} icon={ReactJS}/>
            <SkillItem label={"Android"} icon={Android}/>
            <SkillItem label={"iOS with Swift"} icon={Swift}/>
          </div>

          <div className="tools third">
            <div className="third-title">
              <h2>Tools</h2>
              <div className="underline"/>
            </div>

            <SkillItem label={"AWS"} icon={AWS}/>
            <SkillItem label={"Google Cloud"} icon={GCP}/>
            <SkillItem label={"XCode"} icon={XCode}/>
            <SkillItem label={"Android Studio"} icon={AndroidStudio}/>

          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
