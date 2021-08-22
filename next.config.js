const withPWA = require('next-pwa')
const path = require('path')

module.exports = withPWA({
	pwa: {
		dest: 'public',
		disable: process.env.NODE_ENV === 'development',
		// register: true,
		// sw: 'service-worker.js',
		// runtimeCaching: true,
	},
	sassOptions: {
		includePaths: [path.join(__dirname, './styles')],
	},
})
