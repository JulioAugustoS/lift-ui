import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { FourDp } from '../Shadow/StyledShadow';
import { 
  ui01, 
  text02, 
  text01, 
  primary, 
  primaryHover, 
  text04, 
  text11, 
  lightHover, 
  success,
  successHover,
  warning,
  warningHover,
  danger,
  dangerHover,
  info,
  infoHover,
  light,
  dark,
  darkHover
} from '../../theme/colors';

// Card Component
export const CardComponent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  min-width: 0;
  min-height: 1px;
  border-radius: 5px;
  background-clip: border-box;
  width: ${props => props.width};
  margin-right: 10px;
  margin-left: 10px;

  ${FourDp};
`;

export const CardImg = styled.img`
  border: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const CardBody = styled.div`
  flex: 1 1 auto;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: ${ui01};
  text-align: ${props => props.textAlign};

  ${props => props.bg === 'primary'
    ? primaryBg
      : props.bg === 'success'
      ? successBg
      : props.bg === 'warning'
      ? warningBg
      : props.bg === 'danger'
      ? dangerBg
      : props.bg === 'info'
      ? infoBg
      : props.bg === 'light'
      ? lightBg
      : props.bg === 'dark'
      ? darkBg
    : `border-bottom: 2px solid ${lightHover};`
  };
`;

export const CardTitle = styled.span`
  margin-bottom: .75rem;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.2;

  color: ${props => 
    props.bg !== 'warning' && props.bg !== 'light' && props.bg === ''
    ? text04
    : text01
  };
`;

export const CardSubtitle = styled.span`
  margin-bottom: .5rem !important;
  margin-top: -.365rem;
  font-size: .90rem;
  line-height: 1.2;

  color: ${props => 
    props.bg !== 'warning' && props.bg !== 'light' && props.bg === ''
    ? text11
    : text02
  };
`;

export const CardText = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
  display: block;
  font-size: 14px;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  
  color: ${props => 
    props.bg !== 'warning' && props.bg !== 'light' && props.bg === '' 
    ? text11
    : text01
  };
`;

export const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.footerAlign};
  align-items: ${props => props.footerAlign};
`;

// BG Props
const primaryBg = css`
  background: ${primary};
  border: none;
  border-bottom: 3px solid ${primaryHover} !important;
`;

const successBg = css`
  background: ${success};
  border: none;
  border-bottom: 3px solid ${successHover} !important;
`;

const warningBg = css`
  background: ${warning};
  border: none;
  border-bottom: 3px solid ${warningHover} !important;
`;

const dangerBg = css`
  background: ${danger};
  border: none;
  border-bottom: 3px solid ${dangerHover} !important;
`;

const infoBg = css`
  background: ${info};
  border: none;
  border-bottom: 3px solid ${infoHover} !important;
`;

const lightBg = css`
  background: ${light};
  border: none;
  border-bottom: 3px solid ${lightHover} !important;
`;

const darkBg = css`
  background: ${dark};
  border: none;
  border-bottom: 3px solid ${darkHover} !important;
`;