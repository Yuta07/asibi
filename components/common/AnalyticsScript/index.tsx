import Script from 'next/script'

import { GA_TRACKING_ID } from '@/lib/gtag'

export const AnalyticsScript = () => {
	return (
		<>
			<Script id="gtag-init" strategy="afterInteractive">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', '${GA_TRACKING_ID}');
			`}
			</Script>
		</>
	)
}
