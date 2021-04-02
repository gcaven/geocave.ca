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
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.imgContainer}>
            <Image
              src="/images/me.jpeg"
              alt="Geoffrey seated, looking to the right"
              width={155}
              height={155}
              className={styles.image}
            />
          </div>
          <Heading tag="h1">Geoffrey Caven</Heading>
          <div className={styles.divider} />
          <Text>Web & Mobile Developer</Text>
        </div>
      </div>
    </div>
  );
}

export default App;
