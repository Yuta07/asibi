import React, { Fragment } from 'react';
import App from 'next/app';
import Head from 'next/head';
import styled, { createGlobalStyle } from 'styled-components';
import { Header } from '../components/organisms/header';
import { Footer } from '../components/organisms/footer';

export default class MyApp extends App {
  componentDidMount() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/static/service-worker.js')
        .then(() => {
          console.log('service worker registration successful');
        })
        .catch(err => {
          console.warn('service worker registration failed', err.message);
        });
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyle />
        <Wrapper>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Wrapper>
      </>
    );
  }
}

const GlobalStyle = createGlobalStyle`
  html {
    overflow-y: scroll;
  }

  body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;
    letter-spacing: 1.2px;
    word-wrap: break-word;
    font-kerning: normal;
    color: #353b48;
    background-color: #ffffff;
    min-height: 100vh;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
