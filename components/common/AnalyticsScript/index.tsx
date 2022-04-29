import Script from 'next/script'

import { GA_TRACKING_ID, UNIVERSAL_ID } from '@/lib/gtag'

export const AnalyticsScript = () => {
	return (
		<>
			<Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${UNIVERSAL_ID}`} />
			<Script id="gtag-init" strategy="afterInteractive">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', '${UNIVERSAL_ID}');
					gtag('config', '${GA_TRACKING_ID}');
			`}
			</Script>
		</>
	)
}
