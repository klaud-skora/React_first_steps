import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

const Card = props => (
  <div className={styles.component}>
    <article className={styles.component}>
      {console.log(props.title)}
      {props.title}
    </article>
  </div>
);
Card.propTypes = {
  title: PropTypes.node,
  id: PropTypes.string,
  index: PropTypes.number,
};

export default Card;
