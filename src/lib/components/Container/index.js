import styled from '@emotion/styled';

const ContainerComponent = styled.div`
  width: 60%;
  margin: 0 auto;

  @media (min-width: 992px){
    min-width: 960px;
  }

  @media (min-width: 768px){
    min-width: 720px;
  }

  @media (min-width: 576px){
    min-width: 540px;
  }

  @media (min-width: 320px){
    min-width: 437px;
  }
`;

export default ContainerComponent;