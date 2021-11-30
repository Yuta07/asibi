import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { Head } from '@components/common/Head'
import { Layout } from '@components/common/Layout'
import { GA_ID, pageview } from '@lib/gtag'
import '@styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter()

	useEffect(() => {
		if (!GA_ID) {
			return
		}

		const handleRouteChange = (path: string) => {
			pageview(path)
		}

		router.events.on('routeChangeComplete', handleRouteChange)
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange)
		}
	}, [router.events])

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
