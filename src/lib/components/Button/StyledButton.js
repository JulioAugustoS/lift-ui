import styled from '@emotion/styled';
import { css } from '@emotion/core';

// Colors
import { ui01, primary, primaryHover, focusPrimary, focusSuccess, success, successHover } from '../../theme/colors';

export const StyledButton = styled.button`
  min-height: 1em;
  display: inline-block;
  box-sizing: border-box;
  cursor: pointer;
  outline: none;
  font: inherit;
  text-decoration: none;
  margin: 0;
  background: transparent;
  overflow: visible;
  text-transform: none;
  border-radius: 5px;
  text-align: center;
  border: none;
  vertical-align: middle;
  padding: 0 1.5em 0;
  font-size: 1rem;
  font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  margin: 0 .25em 0 0;
  transition: color .15s ease-in-out,
              background-color .15s ease-in-out,
              border-color .15s ease-in-out,
              border-bottom .15s ease-in-out,
              box-shadow .15s ease-in-out;

  ${props => props.theme === 'primary' 
    ? primaryTheme 
      : props.theme === 'success'
      ? successTheme 
      
    : themeDefault
  };
  ${props => props.shadow};
  ${props => 
    props.size === 'min' 
    ? mini 
      : props.size === 'tiny' 
      ? tiny 
      : props.size === 'small'
      ? small
      : props.size === 'medium'
      ? medium
      : props.size === 'large'
      ? large
      : props.size === 'big'
      ? big
      : props.size === 'huge'
      ? huge
    : medium
  }
  ${props => props.full ? full : null}
`;

// Theme Primary
const primaryTheme = css`
  background-color: ${primary};
  border-top: 2px solid ${primaryHover};
  color: ${ui01};

  &:hover {
    background-color: ${primaryHover};
    border-top: 2px solid ${primary};
  }

  &:focus {
    box-shadow: 0 0 0.3rem 0.1rem ${focusPrimary};
    outline: none;
  }

  &:disabled {
    background-color: ${primary};
    border-top: 2px solid ${primaryHover};
    cursor: no-drop;
    opacity: .65;
  }
`;

const successTheme = css`
  background-color: ${success};
  border-top: 2px solid ${successHover};
  color: ${ui01};

  &:hover {
    background-color: ${successHover};
    border-top: 2px solid ${success};
  }

  &:focus {
    box-shadow: 0 0 0.3rem 0.1rem ${focusSuccess};
    outline: none;
  }

  &:disabled {
    background-color: ${success};
    border-top: 2px solid ${successHover};
    cursor: no-drop;
    opacity: .65;
  }
`;

// Theme Default
const themeDefault = css`
  background-color: ${ui01};
  color: ${primary};
`;

// Mini size
const mini = css`
  height: 28.28px !important;
  font-size: .78571429rem !important;
`;

const tiny = css`
  height: 30.84px !important;
  font-size: .85714286rem !important;
`;

// Small size
const small = css`
  height: 33.41px !important;
  font-size: .92857143rem !important;
`;

const medium = css`
  height: 36px !important;
  font-size: 1rem !important;
`;

// Large size
const large = css`
  height: 41.13px !important;
  font-size: 1.14285714rem !important;
`;

const big = css`
  height: 46.28px !important; 
  font-size: 1.28571429rem !important;
`;

const huge = css`
  height: 51.41px !important;
  font-size: 1.42857143rem !important; 
`;

// Full width button
const full = css`
  width: 100% !important; 
  border-radius: 3px !important;
`;