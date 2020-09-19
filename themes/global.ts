import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    overflow-y: scroll;
  }

  body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 1.2px;
    word-wrap: break-word;
    font-kerning: normal;
    color: #353b48;
    background: #ececec;
    min-height: 100vh;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  h1 {
    font-size: 20px;
  }

  h2, h3 {
    font-size: 18px;
  }

  h3, h4, h5, p {
    font-size: 16px;
  }

  span, a {
    font-size: 14px;
  }

  small {
    font-size: 12px;
  }
`;
