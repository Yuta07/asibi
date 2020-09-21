import { AppProps } from 'next/app';
import Head from 'next/head';
import { Layout } from '../components/Layout';
import { GlobalStyle } from '../themes/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Yutaka Miyazaki 🤔</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="yutaka's space" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-touch-icon-144x144.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
