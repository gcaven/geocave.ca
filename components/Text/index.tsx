import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './styles.module.scss';

const Text = (props: TextProps) => {
  return (
    <span 
      className={classnames(
        ...props.customStyles,
        styles.text,
        {
          [styles.regular]: props.weight === 'regular',
          [styles.medium]: props.weight === 'medium',
          [styles.bold]: props.weight === 'bold'
        }
      )}
    >
      {props.children}
    </span>
  );
}

export interface TextProps {
  weight: string,
  customStyles: Array<string>,
  children: React.ReactNode
};

Text.defaultProps = {
  weight: 'regular',
  customStyles: []
};

export default Text;