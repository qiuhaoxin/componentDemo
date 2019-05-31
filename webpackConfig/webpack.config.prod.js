const webpack=require('webpack');
const path=require('path');
const cleanWebpackPlugin=require('clean-webpack-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const UglifyJsPlugin=require('uglifyjs-webpack-plugin');
const ExtractTextPlugin=require('extract-text-webpack-plugin');

const cssFilename = 'static/css/[name].[hash:8].css';

const ExtractTextOptions=Array(cssFilename.split('/').length).join('../');
//console.log("ExtractTextOptions is "+ExtractTextOptions);
//const manifest=require('./dll/vendor-manifest.json');
const pathToClean=[
  'dist'
]

process.env.NODE_ENV="production";
process.env.BABEL_ENV="production";

module.exports={
	mode:'production',
  devtool:'cheap-module-source-map',
	entry:{
		main:path.resolve(__dirname,'../src/index.js'),
	},
	output:{
		path:path.resolve(__dirname,'../dist'),
		filename:'static/js/[name].[hash:8].js',
		publicPath:'./',
	},
	resolve:{
		extensions:['.js','.jsx','.css','.less'],

	},
	module:{
		rules:[
           {
                test: /\.css$/,
                loader: 'css?sourceMap&modules&localIdentName=[local]___[hash:base64:5]!!',
                exclude: /node_modules/
            },
            {
                test: /\.css$/, 
                use:[
                    'style-loader',
                    'css-loader',
                ]
            },
           {
           	  test:/\.(js|jsx)$/,
           	  loader:require.resolve('babel-loader'),
           	  include:path.resolve(__dirname,'../src'),
           },
           {
           	  test:/\.less$/,
              exclude:[/node_modules/],
           	  loader:ExtractTextPlugin.extract(
                {
                  fallback: {
                    loader: require.resolve('style-loader'),
                    options: {
                      hmr: false,
                    },
                  },
                  use: [
                    {
                      loader: require.resolve('css-loader'),
                      options: {
                        importLoaders: 1,
                        sourceMap: false,
                        modules: true,
                       localIdentName: '[name]_[local]_[hash:base64:5]'
                      },
                    },
                    {
                      loader:require.resolve('less-loader'),
                    }
                  ],
                  publicPath:ExtractTextOptions
                }
              )
           },
           {
           	  test:/\.(jpe?g|png|svg|gif)/,
           	  loader:'url-loader',
           	  options:{
           	  	limit:8192,
           	  	name:'static/media/[name].[hash:8].[ext]',
           	  }
           },{
           	  test:/\.(woff|woff2|eot|ttf)$/,
           	  exclude:/node_modules/,
           	  loader:'file-loader',
           }
		]
	},
	plugins:[
       new webpack.DefinePlugin({
          REQUESTURL:JSON.stringify('prod'),   //记得用JSON.stringify() 或 '"prod"'
       }),
       // new webpack.DllReferencePlugin({
       //    manifest,
       //    context:__dirname,
       // }),
       // new cleanWebpackPlugin(pathToClean,{root:path.resolve(__dirname,"../")}),
       new HtmlWebpackPlugin({
       	  template:path.resolve(__dirname,'../src/public/index.html'),
       	  title:'test layout',
          filename:'index.html',
       	  inject:true,
       }),
       new ExtractTextPlugin({
         filename:cssFilename,
       })

	]
}