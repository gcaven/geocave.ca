import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export interface HeadingProps {
  tag: string,
  children: React.ReactNode;
};

const Heading = (props: HeadingProps) => {
  const Tag = `${props.tag}` as keyof JSX.IntrinsicElements;
  return (
    <Tag className={styles.heading}>
      {props.children}
    </Tag>
  );
};

Heading.propTypes = {
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4'])
};

Heading.defaultProps = {
  tag: 'h1' 
};

export default Heading;