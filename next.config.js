const path = require('path')

module.exports = {
	images: {
		disableStaticImages: true,
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack'],
		})

		return config
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	swcMinify: true,
	experimental: {
		appDir: true,
		// fontLoaders: [{ loader: 'next/font/google', options: { subsets: ['latin'] } }],
	},
}
