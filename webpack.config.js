var path = require('path');

module.exports = {
	entry: './dev/js/main.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public/javascripts')
	},
	

	module: {
		rules: [{
			test: /\.js$/,
			exclude:/node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['env']
				}
			}
		}]
	},
	
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
            	name: '[path][name].[ext]'
            }  
          }
        ]
      }
    ]
  },

	module: {
		rules:[{
			test: /\.scss$/,
			use: [
				'style-loader',
				'css-loader?url=false',//helps with background image path
				'sass-loader'
			]
		}]
	}

	
};