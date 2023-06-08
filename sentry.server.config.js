import * as Sentry from '@sentry/nextjs'

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN

Sentry.init({
	dsn: SENTRY_DSN || 'https://c295d1ced7024e52b3ad8b2a7ebc3641@o4504364383207424.ingest.sentry.io/4504801859993600',
	tracesSampleRate: 0.5,
	release: process.env.npm_package_name + '@' + process.env.npm_package_version,
})
