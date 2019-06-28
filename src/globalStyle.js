import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    src: url("./fonts/OpenSans-Bold.ttf");
    font-family: "OpensSans";
    font-style: bold;
  }

  @font-face {
    src: url("./fonts/OpenSans-Regular.ttf");
    font-family: "OpensSans";
    font-style: normal;
  }

  * {
    box-sizing: border-box; 
    outline: none;
  }

  body {
    font-family: "Open Sans", "Open Sans Regular";
    padding: 0px;
    margin: 0px;
    height: 100%;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
`;


