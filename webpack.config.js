module.exports = {
	entry: './src/main.js',
	output: {
		path: './dist',
		filename: 'index.js'
	},
	devServer: {
		inline: true,
		port: 3333,
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: [
					'react-hot-loader',
					'babel-loader?cacheDirectory&presets[]=react&presets[]=es2015'
				]
			}
		]
	}
}