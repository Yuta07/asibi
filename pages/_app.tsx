import { AppProps } from 'next/app'

import { Head } from '@components/common/Head'
import { Layout } from '@components/common/Layout'
import { useGARouteChange } from '@hooks/useGARouteChange'

import '@styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
	useGARouteChange()

	return (
		<>
			<Head />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}

export default MyApp
