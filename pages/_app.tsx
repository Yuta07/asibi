import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import styled, { createGlobalStyle } from 'styled-components';
import { Header } from '../components/organisms/header';
import { Footer } from '../components/organisms/footer';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/static/service-worker.js')
        .then(() => {
          console.log('service worker registration successful');
        })
        .catch((err) => {
          console.warn('service worker registration failed', err.message);
        });
    }
  }, []);

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
  display: flex;
  flex-direction: column;
`;

export default MyApp;
