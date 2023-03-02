import { M_PLUS_Rounded_1c } from 'next/font/google'

import { AnalyticsScript } from '@/components/common/AnalyticsScript'
import { Head } from '@/components/common/Head'
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

const mPlusRounded1c = M_PLUS_Rounded_1c({ weight: ['400', '500', '700', '900'], subsets: ['latin'] })

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	useGARouteChange()

	const getLayout = Component.getLayout ?? ((page) => page)

	return (
		<>
			{/* eslint-disable-next-line react/no-unknown-property */}
			<style jsx global>{`
				html {
					font-family: ${mPlusRounded1c.style.fontFamily};
				}
			`}</style>
			<Head />
			<AnalyticsScript />
			{getLayout(<Component {...pageProps} />)}
		</>
	)
}

export default MyApp
