import React from 'react';
import Image from 'next/image'
import Header from 'components/Header';
import Heading from 'components/Heading';
import Text from 'components/Text';
import styles from './index.module.scss';

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
      <div className={styles.belowFold}>
        <div className={styles.sectionBlock}>
          <Heading tag="h3">
            Lorem Ipsum
          </Heading>
          <br />
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at metus quis arcu tincidunt gravida. Pellentesque mattis libero tortor, in vehicula nunc tempus pretium. Donec ut enim lobortis urna ultrices lacinia. Praesent id felis in tortor elementum rhoncus non at risus. Aliquam quis pellentesque sapien, in varius risus. Nunc sed congue ipsum. Phasellus suscipit turpis leo, vel tristique risus ornare vitae. Morbi vitae felis vitae ligula euismod euismod. Praesent scelerisque congue nunc id aliquam. Vivamus ornare, sem sit amet vulputate ornare, augue leo dictum quam, vitae aliquam dui orci et sem. In suscipit, urna id maximus dictum, lacus nunc tristique massa, at sodales nulla odio vitae ligula. Praesent lacinia porttitor mi, in gravida turpis pretium sodales.
          </Text>
        </div>
      </div>
    </div>
  );
}

export default App;
