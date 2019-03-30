import styled from '@emotion/styled';

const RowContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  justify-content: ${props => props.jc};
`;

export default RowContainer;