const devServer=require('webpack-dev-server');
const webpack=require('webpack');
const config=require('../webpackConfig/webpack.config.dev.js');
const path=require('path');
config.entry.unshift('webpack-dev-server/client?http://localhost:3008/',
	'webpack/hot/dev-server');
const devServerConfig={
	contentBase:path.resolve(__dirname,"../dist"),//path.resolve(__dirname,"../dist")
	hot:true,
	port:3108,
}

// console.log("dev config is "+JSON.stringify(config));
const chalk=require('chalk');

const compiler=webpack(config);

process.env.NODE_ENV="development";
process.env.BABEL_ENV="development";

const DEFAULT_PORT=process.env.PORT || 3108;


const devServerOptins=Object.assign({},devServerConfig,{

});
console.log("devServerOptins is "+JSON.stringify(devServerOptins));
devServer.addDevServerEntrypoints(config,devServerOptins);
const server=new devServer(compiler,devServerOptins);


server.listen(DEFAULT_PORT,'0.0.0.0',()=>{
   console.log(chalk.blue(`server is starting at port ${DEFAULT_PORT}`));
})