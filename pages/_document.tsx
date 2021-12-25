import Document, { Html, Head, Main, NextScript } from 'next/document'

import { AnalyticsScript } from '@components/common/AnalyticsScript'

class MyDocument extends Document {
	render() {
		return (
			<Html lang="ja-JP">
				<Head>
					<AnalyticsScript />
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
