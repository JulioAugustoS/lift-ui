/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import { text01 } from '../../theme/colors';

const propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

const defaultProps = {
  label: 'Close',
};

const CloseButton = ({ label, onClick }) => (
  <button 
    css={buttonClose}
    type="button" 
    onClick={onClick}
  >
    <span aria-hidden="true">&times;</span>
    <span css={srOnly}>{ label }</span>
  </button>
);

const buttonClose = css`
  position: absolute;
  top: 0;
  right: 0;
  padding: .50rem 1.15rem;
  color: inherit;
  border: 0;
  background-color: transparent;
  -webkit-appearance: none;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  text-shadow: 0 1px 0 ${text01};
  opacity: .5;

  &:not(:disabled) {
    cursor: pointer;
  }

  &:not(:disabled).hover {
    opacity: .75;
  }

  &:hover {
    color: ${text01};
    text-decoration: none;
  }

  &:focus {
    outline: none;
  }
`;

const srOnly = css`
  border: 0;
  clip: rect(0,0,0,0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

CloseButton.displayName = 'CloseButton';
CloseButton.propTypes = propTypes;
CloseButton.defaultProps = defaultProps;

export default CloseButton;