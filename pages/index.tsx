import React from 'react';
import Image from 'next/image'
import Header from 'components/Header';
import Heading from 'components/Heading';
import Text from 'components/Text';
import styles from './index.module.scss';

// TODO: break into components
// TODO: pages for each portfolio piece, with more detail

const App = () => {

  return (
    <div className="universe">
      {/* <Header /> */}
      <video 
        className={styles.video}
        src="/video/waves720.mp4"
        autoPlay={true}
        loop
        muted
        playsInline
      />
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.imgContainer}>
            <Image
              src="/images/me.jpeg"
              alt="Geoffrey seated, looking to the right"
              width={163}
              height={163}
              className={styles.image}
            />
          </div>
          <Heading tag="h1">Geoffrey Caven</Heading>
          <div className={styles.divider} />
          <Text customStyles={[styles.subtitle]}>Web & Mobile Developer</Text>
        </div>
      </div>
      <div className={styles.sectionBlock}>
        <Heading tag="h2">
          It's nice to meet you!
        </Heading>
        <br />
        <Text p align="center">
          I'm Geoff Caven, a web developer based out of Atlantic Canada (🇨🇦) and currently working happily and remotely for 
          {' '}<a href="https://nbx.com">Norwegian Block Exchange</a> (🇳🇴). I'm originally from Halifax, NS, but currently live in Charlottetown, PEI. 
          {' '}
        </Text>
      </div>
      <div className={styles.sectionBlock}>
        <Heading tag="h2">
          Here are my skills:
        </Heading>
        <br />
        <div className={styles.skillGrid}>
          <Text align="center">Javascript</Text>
          <Text align="center">Typescript</Text>
          <Text align="center">React</Text>
          <Text align="center">Svelte</Text>
          <Text align="center">React Native</Text>
          <Text align="center">Redux</Text>
          <Text align="center">Node</Text>
          <Text align="center">Django</Text>
          <Text align="center">Next.js</Text>
          <Text align="center">Sass</Text>
          <Text align="center">Jekyll</Text>
          <Text align="center">GraphQL</Text>
          <Text align="center">Apollo</Text>
          <Text align="center">Microfrontends</Text>
          <Text align="center">MongoDB</Text>
          <Text align="center">PostreSQL</Text>
          <Text align="center">AWS</Text>
          <Text align="center">Google Cloud</Text>
          <Text align="center">An eye for design</Text>
          <Text align="center">Pride in my work</Text>
        </div>
      </div>
      <div className={styles.sectionBlock}>
        <Heading tag="h2">
          Take look at my portfolio
        </Heading>
        <br />
        <div className={styles.portfolioGrid}>
          <Text align="center">Norwgian Block Exchange</Text>
          <Text align="center">Harbr</Text>
          <Text align="center">Dloft</Text>
          <Text align="center">Cadillac Fairview</Text>
          <Text align="center">Buk</Text>
          <Text align="center">Romeo Dallaire Child Soldiers Initiative</Text>
          <Text align="center">RZA Sports</Text>
          <Text align="center">Cadillac Fairview</Text>
          <Text align="center">CrapMap</Text>
        </div>
      </div>
      <div className={styles.sectionBlock}>
        <Heading tag="h2">
          Get in touch!
        </Heading>
        <br />
        <Text p align="center">
          TODO: contact section
        </Text>
      </div>
    </div>
  );
}

export default App;
