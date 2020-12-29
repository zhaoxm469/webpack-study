# 前言  

默认webpack入口js文件是不能识别 css 资源的.
如果能让他们识别 css 样式资源, 必须引用相关的loadr才可以.

## 识别css资源

安装依赖

``` bash
npm i -D style-loader
```

在webpack.config.js 配置css loader , 使能识别样式资源

``` js
rules: [{
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
}, ],
```

## 识别scss资源

安装依赖

``` bash
npm install -D sass saas-loader
```

webpack.config.js 配置 loader

``` js
rules: [{
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
}, ],
```

## 注意事项  

1. loader 配置的顺序很重要, 从右往左执行的! 顺序不可有误

2. 解决saas下载慢的问题

在项目根目录创建.npmrc文件.

.npmrc文件写入代码  

``` bash
sass_binary_site = https: //npm.taobao.org/mirrors/node-sass/
```
