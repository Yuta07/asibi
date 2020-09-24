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
        <meta name="description" content="yutaka's space." />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@yutazon7" />
        <meta name="twitter:creator" content="Yuta07" />
        <meta property="og:title" content="Yutaka Miyazaki 🤔" />
        <meta property="og:description" content="Yutaka Miyazakiのポートフォリオ" />
        <meta property="og:url" content="https://yutazon.me" />
        <meta property="og:image" content="/ogp.jpg" />
        <meta property="og:type" content="website" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon-precomposed" href="/icons/apple-icon-precomposed.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-touch-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-icon-192x192.png" />
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
