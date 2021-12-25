import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html lang="ja-JP">
				<Head>
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
