import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './styles.module.scss';

const Text = (props: TextProps) => {
  const Tag = props.p ? 'p' : 'span' as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={classnames(
        ...props.customStyles,
        styles.text,
        {
          [styles.left]: props.align === 'left',
          [styles.right]: props.align === 'right',
          [styles.center]: props.align === 'center',
          [styles.regular]: props.weight === 'regular',
          [styles.medium]: props.weight === 'medium',
          [styles.bold]: props.weight === 'bold'
        }
      )}
    >
      {props.children}
    </Tag>
  );
}

export interface TextProps {
  p: boolean,
  weight: string,
  align: string,
  customStyles: Array<string>,
  children: React.ReactNode
};

Text.defaultProps = {
  p: false,
  align: 'left',
  weight: 'regular',
  customStyles: []
};

export default Text;