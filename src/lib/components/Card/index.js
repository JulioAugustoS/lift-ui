import React from 'react';
import PropTypes from 'prop-types';
import { CardComponent, CardImg, CardBody, CardTitle, CardSubtitle, CardText, CardFooter } from './StyledCard';

const propTypes = {
  /**
   * Sets card background
   *
   * @type {('primary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark')}
   */
  bg: PropTypes.string,

  /**
   * Set image the card
   */
  img: PropTypes.string,

  /**
   * Set card title
   */
  title: PropTypes.string,

  /**
   * Set card subtitle
   */
  subtitle: PropTypes.string,

  /**
   * Sets card text description
   */
  text: PropTypes.string,

  /**
   * Add a content on the card footer
   */
  footer: PropTypes.object,

  /**
   * Align the content the footer of card
   */
  footerAlign: PropTypes.string,
};

const defaultProps = {
  textAlign: 'left'
};

const Card = props => {
  return (
    <CardComponent 
      { ...props }
    >
      <CardImg src={props.img} />
      <CardBody { ...props }>
        { props.title ? <CardTitle { ...props }>{ props.title }</CardTitle> : null }
        { props.subtitle ? <CardSubtitle { ...props }>{ props.subtitle }</CardSubtitle> : null }
        { props.text ? <CardText { ...props }>{ props.text }</CardText> : null }
        <CardFooter footerAlign={props.footerAlign}>
          { props.footer }
        </CardFooter>
      </CardBody>
    </CardComponent>
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;