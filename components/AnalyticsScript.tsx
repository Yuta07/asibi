import Script from 'next/script'

import { GA_TRACKING_ID } from '@/lib/gtag'

export const AnalyticsScript = () => {
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
