import styled from 'styled-components';

export const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70vh;
  padding: 20px;
  background-color: #1a1a1a;
  color: white;
  overflow: auto;  // Add this line to handle overflowing content
`;

export const TextContainer = styled.div`
//   margin-top: 20px;
  text-align: center;
  max-width: 70vw;
  line-height: 1.6;
  font-size: 18px;
  color: #f0f0f0;
`;

export const BlankDiv = styled.div`
  height:100px;
`;