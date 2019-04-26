const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
	output: {
		filename: 'index.js',
		path: __dirname
	},
	plugins: [
		new VueLoaderPlugin()
	],
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: 'vue-loader'
			}
		]
	}
}
