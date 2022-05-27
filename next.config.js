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
	experimental: {
		images: {
			layoutRaw: true,
		},
	},
}
