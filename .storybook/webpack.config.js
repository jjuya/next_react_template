const path = require('path')

module.exports = {
	module: {
		rules: [
			{
				test: /\.js$|\.jsx$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							plugins: [
								'@babel/plugin-proposal-optional-chaining',
								'@babel/plugin-proposal-nullish-coalescing-operator',
							],
						},
					},
				],
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
				include: path.resolve(__dirname, '../'),
				exclude: path.resolve(__dirname, '../node_modules')
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
				include: path.resolve(__dirname, '../'),
				exclude: path.resolve(__dirname, '../node_modules')
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {},
					},
				],
			},
		],
	},
}
