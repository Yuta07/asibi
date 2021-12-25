import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { GA_ID, pageview } from '@lib/gtag'

export const useGARouteChange = () => {
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
}
