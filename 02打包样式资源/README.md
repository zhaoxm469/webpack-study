# 操作笔记

首先利用vscode [webpack代码片段插件]([http://asdasd](https://marketplace.visualstudio.com/items?itemName=jeremyrajan.webpack)) wpstart 快速生成webpack一个启动的代码片段

在项目创建目录创建.npmrc文件, 防止安装scss-loader 安装速度超级慢~~
.npmrc

``` bash
sass_binary_site = https: //npm.taobao.org/mirrors/node-sass/
```

在webpack配置rules, 让webpack 能识别sass语言  

``` js
rules: [{
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
}, ],
```

终端输入命令安装依赖

``` bash
npm install - D saas-loader style-loader sass-loader
```
