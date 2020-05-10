import React, { Fragment } from 'react';
import App from 'next/app';
import Head from 'next/head';
import styled, { createGlobalStyle } from 'styled-components';
import { Header } from '../components/organisms/header';

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
          <Container>
            <Header />
            <Component {...pageProps} />
          </Container>
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
    font-family: "Cera Pro", "helvetica neue", Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;
    letter-spacing: 1.2px;
    word-wrap: break-word;
    font-kerning: normal;
    color: #222f3e;
    background-color: #fefefe;
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
  height: 100vh;
  padding: 40px 50px 0;
  display: flex;
  background-image: linear-gradient(90deg, #efefef, #e4d7cb);
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
