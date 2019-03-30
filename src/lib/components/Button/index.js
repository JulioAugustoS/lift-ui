import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './StyledButton';

const propTypes = {
  /**
   * `'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light', 'link'`
   */
  theme: PropTypes.string,

  /**
   * Specifies a large or small button
   * 
   * @type ('sm'|'lg')
   */
  size: PropTypes.string,

  /**
   * Spans the full width of the Button parent
   */
  full: PropTypes.bool,

  /**
   * Manually set the visual state of the button to `:active`
   */
  active: PropTypes.bool,

  /**
   * Disables the button, preventing mouse envents
   */
  disabled: PropTypes.bool,

  /**
   * Providing a `href` will render an `<a>` element, _styled_ as a button
   */
  href: PropTypes.string,

  /**
   * add shadow a button
   */
  shadow: PropTypes.bool,

  /**
   * Defines HTML button type attribute
   * 
   * @default 'button'
   */
  type: PropTypes.oneOf(['button', 'reset', 'submit', null]),
};

const defaultProps = {
  theme: 'primary',
  active: false,
  disabled: false,
  type: 'button'
}

const Button = props => {  
  return <StyledButton {...props} />;
};

Button.displayName = 'Button';
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;