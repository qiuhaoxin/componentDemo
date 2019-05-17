'use strict';

const fs=require('fs');
const path=require('path');

const appDirectory=fs.realpathSync(process.cwd());
console.log("appDirectory is "+appDirectory);
const resolvePath=relativePath=>path.resolve(appDirectory,relativePath);

module.exports={
	appEntry:resolvePath('src/index.js'),
	appDist:resolvePath('dist'),
	appHtml:resolvePath('src/public/index.html'),
	appDevHtml:resolvePath('src/public/index.html'),
}