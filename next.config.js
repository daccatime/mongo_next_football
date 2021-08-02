const path = require('path')
module.exports = {
	trailingSlash: false,
	webpackDevMiddleware: config => {
		config.watchOptions = {
			poll: 1000,
			aggregateTimeout: 300
		}

		return config
	},
	images: {
		domains: ['e3.365dm.com','i0.wp.com']
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')]
	}
}