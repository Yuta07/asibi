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

		config.externals = [...config.externals, 'canvas', 'jsdom']

		return config
	},
	swcMinify: true,
	experimental: {
		appDir: true,
		typedRoutes: true,
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
