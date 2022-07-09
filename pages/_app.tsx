import { AnalyticsScript } from '@/components/common/AnalyticsScript'
import { useGARouteChange } from '@/hooks/useGARouteChange'

import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'

import '@/styles/global.scss'

type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	useGARouteChange()

	const getLayout = Component.getLayout ?? ((page) => page)

	return (
		<>
			<AnalyticsScript />
			{getLayout(<Component {...pageProps} />)}
		</>
	)
}

export default MyApp
