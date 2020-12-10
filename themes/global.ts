import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    overflow-y: scroll;
  }

  body {
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.5px;
    word-wrap: break-word;
    font-kerning: normal;
    color: #696969;
    background: #efefef;
    min-height: 100vh;
    counter-reset: number 0;
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

  a {
    color: #696969;
    text-decoration: none;
  }

  small {
    font-size: 12px;
  }

  pre {
    border-radius: 8px;
  }
`;
