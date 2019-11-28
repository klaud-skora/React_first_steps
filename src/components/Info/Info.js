import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';

class Info extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    description: PropTypes.node,
    image: PropTypes.string,
    imageText: PropTypes.node,
  }
  render() {
    const {title, description, image, imageText} = this.props;
    return (
      <Container>
        <Hero titleText={imageText} image={image}/>
        <h2>{title}</h2>
        <p>{description}</p>
      </Container>
    );
  }
}

export default Info;