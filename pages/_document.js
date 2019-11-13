import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return { ...initialProps, styles: [...initialProps.styles, ...sheet.getStyleElement()] };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="yutaka.miyazaki" content="Yutazon.me" />
          <meta name="description" content="ゆたぞんのポートフォリオ" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link rel="apple-touch-icon" sizes="144x144" href="/static/images/icons/apple-touch-icon-144x144.png" />
          <link rel="manifest" href="/static/manifest.json" />
          <link rel="manifest" href="manifest.webmanifest" />
          <script
            async
            src="https://cdn.jsdelivr.net/npm/pwacompat@2.0.6/pwacompat.min.js"
            integrity="sha384-GOaSLecPIMCJksN83HLuYf9FToOiQ2Df0+0ntv7ey8zjUHESXhthwvq9hXAZTifA"
            crossorigin="anonymous"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
