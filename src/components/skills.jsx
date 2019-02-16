import React from 'react';
import Title from './title';
import SkillItem from './skillitem';

import ReactJS from '../assets/icons/reactjs.svg';
import Redux from '../assets/icons/redux.svg';
import Node from '../assets/icons/nodejs.svg';
import Django from '../assets/icons/django.svg';
import Sass from '../assets/icons/sass.svg';
import Jekyll from '../assets/icons/jekyll.svg';
import Apollo from '../assets/icons/apollo.svg';

// import Android from '../assets/icons/android.svg';
// import Swift from '../assets/icons/swift.svg';

import AWS from '../assets/icons/aws.svg';
import GCP from '../assets/icons/gcp.svg';
import XCode from '../assets/icons/xcode.png';
import AndroidStudio from '../assets/icons/androidstudio.svg';
import Mongo from '../assets/icons/mongodb.svg';
import Postgres from '../assets/icons/postgres-alt.svg';
import GraphQL from '../assets/icons/graphql.svg';

class Skills extends React.PureComponent {
  render() {
    return (
      <div className="skills block" id="skills">
        <Title text={"Skills"}/>

        <div className="row">
          <div className="frontend third">
            <div className="title">
              <h2>Web & Mobile</h2>
              <div className="underline"/>
            </div>

            <SkillItem label={"React"} icon={ReactJS}/>
            <SkillItem label={"React Native"} icon={ReactJS}/>
            <SkillItem label={"Redux"} icon={Redux}/>
            <SkillItem label={"Node"} icon={Node}/>
            <SkillItem label={"Django"} icon={Django}/>
            <SkillItem label={"Sass"} icon={Sass}/>
            <SkillItem label={"Jekyll"} icon={Jekyll}/>
            <SkillItem label={"Apollo"} icon={Apollo}/>
          </div>

          <div className="third nomargin" />

          <div className="tools third">
            <div className="title">
              <h2>Tools of the Trade</h2>
              <div className="underline"/>
            </div>

            <SkillItem label={"AWS"} icon={AWS}/>
            <SkillItem label={"Google Cloud"} icon={GCP}/>
            <SkillItem label={"XCode"} icon={XCode}/>
            <SkillItem label={"Android Studio"} icon={AndroidStudio}/>
            <SkillItem label={"MongoDB"} icon={Mongo}/>
            <SkillItem label={"PostgreSQL"} icon={Postgres}/>
            <SkillItem label={"GraphQL"} icon={GraphQL}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
