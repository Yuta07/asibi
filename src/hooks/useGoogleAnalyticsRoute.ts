'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import { pageview } from '@/lib/gtag'

export const useGoogleAnalyticsRoute = () => {
	const pathname = usePathname()
	const searchParams = useSearchParams()

	useEffect(() => {
		pageview(pathname)
	}, [pathname, searchParams])
}
