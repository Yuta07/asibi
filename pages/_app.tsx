import { AppProps } from 'next/app'

import { AnalyticsScript } from '@components/common/AnalyticsScript'
import { Head } from '@components/common/Head'
import { Layout } from '@components/common/Layout'
import { useGARouteChange } from '@hooks/useGARouteChange'

import '@styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
	useGARouteChange()

	return (
		<>
			<Head />
			<AnalyticsScript />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}

export default MyApp
