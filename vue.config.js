const path = require('path')
module.exports = {
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 3000
	},
	configureWebpack: {
		resolve: {
			alias: {
				'@app': path.resolve(__dirname, 'src')
			}
		}
	},
	transpileDependencies: [
		'vuetify'
	]
}