import styled from '@emotion/styled';
import { css } from '@emotion/core';

// Colors
import { primary, primaryHover, focusPrimary, focusSuccess, success, successHover, warningHover, warning, focusWarning, danger, dangerHover, focusDanger, info, infoHover, focusInfo, dark, darkHover, focusDark, light, focusLight, lightHover, text04, text01, link, linkHover, text02 } from '../../theme/colors';

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
      : props.theme === 'warning'
      ? warningTheme
      : props.theme === 'danger'
      ? dangerTheme
      : props.theme === 'info'
      ? infoTheme
      : props.theme === 'light'
      ? lightTheme
      : props.theme === 'dark'
      ? darkTheme
      : props.theme === 'link'
      ? linkTheme
      : props.theme === 'outline-primary'
      ? primaryOutline
      : props.theme === 'outline-success'
      ? successOutline
      : props.theme === 'outline-warning'
      ? warningOutline
      : props.theme === 'outline-danger'
      ? dangerOutline
      : props.theme === 'outline-info'
      ? infoOutline
      : props.theme === 'outline-light'
      ? lightOutline
      : props.theme === 'outline-dark'
      ? darkOutline
    : primaryTheme
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

/**
 * Normal Buttons
 */

// Theme Primary
const primaryTheme = css`
  background-color: ${primary};
  border-top: 2px solid ${primaryHover};
  color: ${text04};

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

    &:hover {
      background: transparent;
    }
  }
`;

// Theme Success
const successTheme = css`
  background-color: ${success};
  border-top: 2px solid ${successHover};
  color: ${text04};

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

    &:hover {
      background: transparent;
    }
  }
`;

// Theme Warning
const warningTheme = css`
  background-color: ${warning};
  border-top: 2px solid ${warningHover};
  color: ${text01};

  &:hover {
    background-color: ${warningHover};
    border-top: 2px solid ${warning};
  }

  &:focus {
    box-shadow: 0 0 0.3rem 0.1rem ${focusWarning};
    outline: none;
  }

  &:disabled {
    background-color: ${warning};
    border-top: 2px solid ${warningHover};
    cursor: no-drop;
    opacity: .65;

    &:hover {
      background: transparent;
    }
  }
`;

// Theme Danger
const dangerTheme = css`
  background-color: ${danger};
  border-top: 2px solid ${dangerHover};
  color: ${text04};

  &:hover {
    background-color: ${dangerHover};
    border-top: 2px solid ${danger};
  }

  &:focus {
    box-shadow: 0 0 0.3rem 0.1rem ${focusDanger};
    outline: none;
  }

  &:disabled {
    background-color: ${danger};
    border-top: 2px solid ${dangerHover};
    cursor: no-drop;
    opacity: .65;

    &:hover {
      background: transparent;
    }
  }
`;

// Theme Info
const infoTheme = css`
  background-color: ${info};
  border-top: 2px solid ${infoHover};
  color: ${text04};

  &:hover {
    background-color: ${infoHover};
    border-top: 2px solid ${info};
  }

  &:focus {
    box-shadow: 0 0 0.3rem 0.1rem ${focusInfo};
    outline: none;
  }

  &:disabled {
    background-color: ${info};
    border-top: 2px solid ${infoHover};
    cursor: no-drop;
    opacity: .65;

    &:hover {
      background: transparent;
    }
  }
`;

// Theme Light
const lightTheme = css`
  background-color: ${light};
  border-top: 2px solid ${lightHover};
  color: ${text01};

  &:hover {
    background-color: ${lightHover};
    border-top: 2px solid ${light};
  }

  &:focus {
    box-shadow: 0 0 0.3rem 0.1rem ${focusLight};
    outline: none;
  }

  &:disabled {
    background-color: ${light};
    border-top: 2px solid ${lightHover};
    cursor: no-drop;
    opacity: .65;

    &:hover {
      background: transparent;
    }
  }
`;

// Theme Dark
const darkTheme = css`
  background-color: ${dark};
  border-top: 2px solid ${darkHover};
  color: ${text04};

  &:hover {
    background-color: ${darkHover};
    border-top: 2px solid ${dark};
  }

  &:focus {
    box-shadow: 0 0 0.3rem 0.1rem ${focusDark};
    outline: none;
  }

  &:disabled {
    background-color: ${dark};
    border-top: 2px solid ${darkHover};
    cursor: no-drop;
    opacity: .65;

    &:hover {
      background: transparent;
    }
  }
`;  

// Theme Link
const linkTheme = css`
  color: ${link};

  &:hover {
    color: ${linkHover};
    text-decoration: underline;
  }

  &:disabled {
    color: ${text02};
    cursor: no-drop;
    opacity: .65;

    &:hover {
      color: ${text02};
    }
  }
`;  

/**
 * Outline Buttons
 */

// Outline Theme Primary
const primaryOutline = css`
  border-top: 2px solid ${primaryHover};
  border-left: 1px solid ${primary};
  border-right: 1px solid ${primary};
  border-bottom: 1px solid ${primary};
  color: ${primary};

  &:hover {
    background-color: ${primaryHover};
    border-top: 2px solid ${primary};
    color: ${text04};
  }

  &:focus {
    box-shadow: 0 0 0.3rem 0.1rem ${focusPrimary};
    outline: none;
  }

  &:disabled {
    border-top: 2px solid ${primaryHover};
    border-left: 1px solid ${primary};
    border-right: 1px solid ${primary};
    border-bottom: 1px solid ${primary};
    color: ${primary};
    cursor: no-drop;
    opacity: .65;

    &:hover {
      background: transparent;
    }
  }
`;

// Outline Theme Success
const successOutline = css`
  border-top: 2px solid ${successHover};
  border-left: 1px solid ${success};
  border-right: 1px solid ${success};
  border-bottom: 1px solid ${success};
  color: ${success};

  &:hover {
    background-color: ${successHover};
    border-top: 2px solid ${success};
    color: ${text04};
  }

  &:focus {
    box-shadow: 0 0 0.3rem 0.1rem ${focusSuccess};
    outline: none;
  }

  &:disabled {
    border-top: 2px solid ${successHover};
    border-left: 1px solid ${success};
    border-right: 1px solid ${success};
    border-bottom: 1px solid ${success};
    color: ${success};
    cursor: no-drop;
    opacity: .65;

    &:hover {
      background: transparent;
    }
  }
`;

// Outline Theme Warning
const warningOutline = css`
  border-top: 2px solid ${warningHover};
  border-left: 1px solid ${warning};
  border-right: 1px solid ${warning};
  border-bottom: 1px solid ${warning};
  color: ${warning};

  &:hover {
    background-color: ${warningHover};
    border-top: 2px solid ${warning};
    color: ${text04};
  }

  &:focus {
    box-shadow: 0 0 0.3rem 0.1rem ${focusWarning};
    outline: none;
  }

  &:disabled {
    border-top: 2px solid ${warningHover};
    border-left: 1px solid ${warning};
    border-right: 1px solid ${warning};
    border-bottom: 1px solid ${warning};
    color: ${warning};
    cursor: no-drop;
    opacity: .65;

    &:hover {
      background: transparent;
    }
  }
`;

// Outline Theme Danger
const dangerOutline = css`
  border-top: 2px solid ${dangerHover};
  border-left: 1px solid ${danger};
  border-right: 1px solid ${danger};
  border-bottom: 1px solid ${danger};
  color: ${danger};

  &:hover {
    background-color: ${dangerHover};
    border-top: 2px solid ${danger};
    color: ${text04};
  }

  &:focus {
    box-shadow: 0 0 0.3rem 0.1rem ${focusDanger};
    outline: none;
  }

  &:disabled {
    border-top: 2px solid ${dangerHover};
    border-left: 1px solid ${danger};
    border-right: 1px solid ${danger};
    border-bottom: 1px solid ${danger};
    color: ${danger};
    cursor: no-drop;
    opacity: .65;

    &:hover {
      background: transparent;
    }
  }
`;

// Outline Theme Info
const infoOutline = css`
  border-top: 2px solid ${infoHover};
  border-left: 1px solid ${info};
  border-right: 1px solid ${info};
  border-bottom: 1px solid ${info};
  color: ${info};

  &:hover {
    background-color: ${infoHover};
    border-top: 2px solid ${info};
    color: ${text04};
  }

  &:focus {
    box-shadow: 0 0 0.3rem 0.1rem ${focusInfo};
    outline: none;
  }

  &:disabled {
    border-top: 2px solid ${infoHover};
    border-left: 1px solid ${info};
    border-right: 1px solid ${info};
    border-bottom: 1px solid ${info};
    color: ${info};
    cursor: no-drop;
    opacity: .65;

    &:hover {
      background: transparent;
    }
  }
`;

// Outline Theme Light
const lightOutline = css`
  border-top: 2px solid ${lightHover};
  border-left: 1px solid ${light};
  border-right: 1px solid ${light};
  border-bottom: 1px solid ${light};
  color: ${text01};

  &:hover {
    background-color: ${lightHover};
    border-top: 2px solid ${light};
    color: ${text01};
  }

  &:focus {
    box-shadow: 0 0 0.3rem 0.1rem ${focusLight};
    outline: none;
  }

  &:disabled {
    border-top: 2px solid ${lightHover};
    border-left: 1px solid ${light};
    border-right: 1px solid ${light};
    border-bottom: 1px solid ${light};
    color: ${text01};
    cursor: no-drop;
    opacity: .65;

    &:hover {
      background: transparent;
    }
  }
`;

// Outline Theme Light
const darkOutline = css`
  border-top: 2px solid ${darkHover};
  border-left: 1px solid ${dark};
  border-right: 1px solid ${dark};
  border-bottom: 1px solid ${dark};
  color: ${text01};

  &:hover {
    background-color: ${darkHover};
    border-top: 2px solid ${dark};
    color: ${text04};
  }

  &:focus {
    box-shadow: 0 0 0.3rem 0.1rem ${focusDark};
    outline: none;
  }

  &:disabled {
    border-top: 2px solid ${darkHover};
    border-left: 1px solid ${dark};
    border-right: 1px solid ${dark};
    border-bottom: 1px solid ${dark};
    color: ${text01};
    cursor: no-drop;
    opacity: .65;

    &:hover {
      background: transparent;
    }
  }
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