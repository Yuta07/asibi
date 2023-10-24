'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'
import { useEffect } from 'react'

import { pageview, GA_TRACKING_ID } from '@/lib/gtag'

export const AnalyticsScript = () => {
	const pathname = usePathname()
	const searchParams = useSearchParams()

	useEffect(() => {
		pageview(pathname)
	}, [pathname, searchParams])

	return (
		<>
			<Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} strategy="afterInteractive" />
			<Script
				async
				dangerouslySetInnerHTML={{
					__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_TRACKING_ID}');
          `,
				}}
				id="gtag-init"
				strategy="afterInteractive"
			/>
		</>
	)
}
