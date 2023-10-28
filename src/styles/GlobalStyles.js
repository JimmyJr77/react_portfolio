import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  .App {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .content {
    flex: 1;
  }

  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: black;
    color: #fff;
}

  body, html {
    height: 100%;
    margin: 0;
  }

  #app { 
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .main-content {
    flex: 1 0 auto;  
  }

  .orange {
    color: #FF4E00;
  }

  .blue {
    color: slateblue;
  }

  .dark-grey {
    color: darkslategrey;
  }

  .black {
    color: black;
  }
`;

export default GlobalStyles;