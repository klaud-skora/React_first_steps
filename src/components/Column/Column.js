import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import {settings} from '../../data/dataStore';
import Creator from '../Creator/Creator';
import Icon from '../Icon';
import {Droppable} from 'react-beautiful-dnd';

const Column = props => (
  <section className={styles.component}>
    <h3 className={styles.title}>
      <span className={styles.icon}>
        <Icon name={props.icon || defaultProps.icon}/>
      </span>
      {props.title}
    </h3>
    <div>
      <Droppable droppableId={props.id}>
        {provided => (
          <div 
            className={styles.cards}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {props.cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div> 
    <div className={styles.creator}>
      <Creator title={settings.cardCreatorText} action={props.addCard}/>
    </div>
  </section>
);
Column.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.node,
  cards: PropTypes.array,
  addCard: PropTypes.func,
  id: PropTypes.string,
};
const defaultProps = {
  icon: settings.defaultColumnIcon,
};

export default Column;
