import React from 'react';
import PropTypes from 'prop-types';

import { AlertBase } from './StyledAlert';
import CloseButton from '../CloseButton';

const propTypes = {
  /**
   * The Alert visual themes
   * 
   * @type {'primary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark'}
   */
  theme: PropTypes.string,

  /**
   * The Alert content text
   */
  text: PropTypes.string.isRequired,

  /**
   * Renders a properly aligned dismiss button, as well as
   * adding extra horizontal padding to the Alert
   */
  dismissible: PropTypes.bool,

  /**
   * Controls the visual state of the Alert.
   * 
   * @controllable onClose
   */
  show: PropTypes.bool,

  /**
   * Callback fired when alert is closed.
   * 
   * @controllable show
   */
  onClose: PropTypes.func,

  /**
   * Sets the text for alert close button.
   */
  closeLabel: PropTypes.string,
};

const defaultProps = {
  show: true,
  closeLabel: 'Close alert'
};

// const controllables = {
//   show: 'onClose',
// };

const Alert = props => {
  return (
    <AlertBase 
      { ...props } 
    >
      { props.text }
      { props.dismissible ? <CloseButton /> : null }
    </AlertBase>
  );
};

Alert.displayName = 'Alert';
Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;
