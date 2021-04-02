import React from 'react';
import Heading from 'components/Heading';
import styles from './styles.module.scss';

const Header = () => {
  
  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <Heading tag="h2">Geoffrey Caven</Heading>
      </div>
    </header>
  )
};

export default Header;