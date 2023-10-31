import styled from 'styled-components';

export const FooterContainer = styled.div`
  justify-content: center;
  display: flex;
  background-color: white;
  position:fixed;
  bottom: 0px;
  width: 100vw;
  margin-top:125px;
`;

export const Icon = styled.i`
  background-color: #FF4E00;
  padding: 10px;
  margin:10px;
  border-radius: 50%;
  color: white;
  font-size: 24px;
  
  &:hover {
    background: #007BFF;
  }
`;
