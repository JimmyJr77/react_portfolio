import styled, { keyframes } from 'styled-components';

const pulseOrange = keyframes`
  0% {
    box-shadow: 0 0 5px #ffa500;
  }
  50% {
    box-shadow: 0 0 20px #ffa500, 0 0 30px #ffa500;
  }
  100% {
    box-shadow: 0 0 5px #ffa500;
  }
`;

const pulseBlue = keyframes`
  0% {
    box-shadow: 0 0 5px slateblue;
  }
  50% {
    box-shadow: 0 0 20px slateblue, 0 0 30px slateblue;
  }
  100% {
    box-shadow: 0 0 5px slateblue;
  }
`;

export const PulseOrange = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  animation: ${pulseOrange} 15s infinite alternate;
  z-index: 0;
`;

export const PulseBlue = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  animation: ${pulseBlue} 15s 7.5s infinite alternate;
  z-index: -1;
`;
