// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

const nextConfig = {
	images: {
		disableStaticImages: true,
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack'],
		})

		config.plugins = [
			...config.plugins,
			new webpack.IgnorePlugin({
				resourceRegExp: /canvas/,
				contextRegExp: /jsdom$/,
			}),
		]

		return config
	},
	swcMinify: true,
	experimental: {
		appDir: true,
		// fontLoaders: [{ loader: 'next/font/google', options: { subsets: ['latin'] } }],
	},
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

const withSentryConfig = (config) => {
	return require('@sentry/nextjs').withSentryConfig(config, { silent: true }, { hideSourceMaps: true })
}

const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([withSentryConfig, withBundleAnalyzer], nextConfig)
