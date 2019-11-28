import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import Column from '../Column/ColumnContainer';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator';
import Container from '../Container/Container';

const List = props => (
  <section className={styles.component}>
    <Container>
      <p>Kontener w List</p>
    </Container>
    <Hero titleText={props.title} image={props.image}/>
    <div className={styles.description}>
      {ReactHtmlParser(props.description || defaultProps.description)}
    </div>
    <div className={styles.columns}>
      {props.columns.map(columnData => (
        <Column key={columnData.id} {...columnData} />
        
      ))}
    </div>
    <div className={styles.creator}>
      <Creator text={settings.columnCreatorText} action={props.addColumn}/>
    </div> 
  </section>
);
List.propTypes = {
  title: PropTypes.node.isRequired,
  image: PropTypes.string,
  description: PropTypes.node,
  columns: PropTypes.array,
  addColumn: PropTypes.func,
};
const defaultProps = {
  description: settings.defaultListDescription,
};

export default List;
