import React, { Fragment } from 'react';
import App from 'next/app';
import { createGlobalStyle } from 'styled-components';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Fragment>
        <GlobalStyle />
        <Component {...pageProps} />
      </Fragment>
    );
  }
}

const GlobalStyle = createGlobalStyle`
  html {
    overflow-y: scroll;
  }

  body {
    font-family: "open sans", "helvetica neue", Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    word-wrap: break-word;
    font-kerning: normal;
    color: #282a31;
    background-color: #fefefe;
    min-height: 100vh;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;
