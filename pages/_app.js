import React, { Fragment } from 'react';
import App from 'next/app';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
// import component
import Layout from '../components/Layout';

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
      <Fragment>
        <Head>
          <title>Yutazon.me</title>
          <link rel="canonical" href="$SOME_URL" />
          <meta charset="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <script async src="https://cdn.ampproject.org/v0.js" />
        </Head>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
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
    line-height: 1.6;
    word-wrap: break-word;
    font-kerning: normal;
    color: #323335;
    background-color: #fefefe;
    min-height: 100vh;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  a.ampNavLink {
    text-decoration: none;
    width: 25%;
    display: flex;
    justify-content: center;
  }
`;
