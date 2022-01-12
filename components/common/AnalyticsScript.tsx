import Script from 'next/script'

import { GA_ID, UNIVERSAL_ID } from '@lib/gtag'

export const AnalyticsScript = () => {
	return (
		<>
			<Script defer src={`https://www.googletagmanager.com/gtag/js?id=${UNIVERSAL_ID}`} strategy="afterInteractive" />
			<Script id="ga" defer strategy="afterInteractive">
				{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
							gtag('config', '${UNIVERSAL_ID}');
              gtag('config', '${GA_ID}');
          `}
			</Script>
		</>
	)
}
