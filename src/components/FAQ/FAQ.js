import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';

const Faq = props => (
  <Container>
    <Hero titleText={props.titleText} image={props.image}/>
    <h2>{props.title}</h2>
    <p>{props.description}</p>
  </Container>
);
Faq.propTypes = {
  titleText: PropTypes.node,
  description: PropTypes.node,
  title: PropTypes.node,
  image: PropTypes.string,
};


export default Faq;