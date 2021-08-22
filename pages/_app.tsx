import { AppProps } from 'next/app'

import { Layout } from '@components/common/Layout'
import { Head } from '@components/common/Head'
import '@styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
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
