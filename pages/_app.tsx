import { AppProps } from 'next/app'
import { Layout } from '../components/Layout'
import { GlobalStyle } from '../themes/global'

import { Head } from '@components/common/Head'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head />
			<GlobalStyle />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}

export default MyApp
