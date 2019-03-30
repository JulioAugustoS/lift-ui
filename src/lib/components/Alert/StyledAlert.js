import styled from '@emotion/styled';
import { css } from '@emotion/core';

// Colors
import { 
  primaryHover, 
  primary, 
  success, 
  successHover, 
  warning, 
  warningHover, 
  text01, 
  danger, 
  dangerHover, 
  info,
  infoHover,
  lightHover,
  dark,
  darkHover,
  ui01,
  line01,
  rg04
} from '../../theme/colors';

// Base Alert
export const AlertBase = styled.div`
  position: relative;
  padding: .75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 5px;
  background: ${ui01};
  /* border-top: 0.5px solid ${line01};
  border-left: 0.5px solid ${line01};
  border-right: 0.5px solid ${line01}; */
  box-shadow: 0 1px 6px 0 ${rg04};

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
    : null
  }
`;

// Theme Primary
const primaryTheme = css`
  color: ${primary};
  border-bottom: 2px solid ${primaryHover};
`;

// Theme Success
const successTheme = css`
  color: ${success};
  border-bottom: 2px solid ${successHover};
`;

// Theme Success
const warningTheme = css`
  color: ${warning};
  border-bottom: 2px solid ${warningHover};
`;

// Theme Danger
const dangerTheme = css`
  color: ${danger};
  border-bottom: 2px solid ${dangerHover};
`;

// Theme Info
const infoTheme = css`
  color: ${info};
  border-bottom: 2px solid ${infoHover};
`;

// Theme Light
const lightTheme = css`
  color: ${text01};
  border-bottom: 2px solid ${lightHover};
`;

// Theme Dark
const darkTheme = css`
  color: ${dark};
  border-bottom: 2px solid ${darkHover};
`;

// CSS
export const base = css`

`;