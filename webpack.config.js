module.exports = {
	entry: {
		main: './public/app/nuvi.jsx'
	},
	output: {
		filename: 'bundle.js',
		path: './public/scripts'
	},
	devtool: 'sourcemap',
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				test: /\.s?css$/,
				exclude: /node_modules/,
				loaders: ["style", "css", "sass"]
			}
		]
	}
};
