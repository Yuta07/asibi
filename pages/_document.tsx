import Document, { Html, Head, Main, NextScript } from 'next/document'

import { GA_ID } from '@lib/gtag'

class MyDocument extends Document {
	render() {
		return (
			<Html lang="ja-JP">
				<Head>
					{GA_ID && (
						<>
							<script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
							<script
								dangerouslySetInnerHTML={{
									__html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                  });`,
								}}
							/>
						</>
					)}
					<link
						rel="alternate"
						type="application/rss+xml"
						title="yutaaaaaの日常とtechブログ"
						href="https://yutaaaaa.dev"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
