# 热更新devserver  

是官方提供的一个小型的express服务器, 用他可以为webpack打包生成的资源提供web服务.  
用来帮助我们热更新, 自动打开浏览器, 自动编译webpack, 自动刷新

特点: 他只会在内存中打包, 不会有任何输出的

[webpack-dev-server 文档](https://www.webpackjs.com/configuration/dev-server/)  

## 代码

首先安装 cnpm install -D webpack-dev-server

webpack.config.js配置

``` js
devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    open: true
}
```

启动:devServer命令为:

``` bash
npx webapck-dev-server
```

## 注意事项

在输入命令 启动webpack-dev-server 的时候 , 终端一直报错 Error: Cannot find module 'webpack-cli/bin/config-yargs'.  
原因是:webpack-cli 与 webpack-dev-server 不兼容.  
决绝办法: 卸载webpack-cli , 并且安转3.x版本 webpack-cli.  

``` bash
npm uninstall webpack-cli
npm install - D webpack-cli@3
```
