# CSS兼容性处理

选用[postcss-loader](https://www.postcss.com.cn/) + [autoprefixer](https://www.npmjs.com/package/autoprefixer) 来处理css浏览器兼容性问题.  
[postcss-loader](https://www.postcss.com.cn/) 它是一个用 JavaScript 工具和插件转换 CSS 代码的工具. 用来负责进一步处理 CSS 文件, 比如添加浏览器前缀, 压缩 CSS 等.  
[caniuse](https://www.caniuse.com/) 用来查询css 兼容性网站.  
(Browserslist文档) [https://github.com/browserslist/browserslist]

## 代码  

首先安装
npm install --save-dev  postcss-loader autoprefixer

配置webpack.config.js文件

``` js
rules: [{
    test: /\.scss$/i,
    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader'],
}]
```

创建postcss.config.jsw文件

``` js
module.exports = {
    plugins: [
        require('autoprefixer'),
    ]
};
```

并且在根目录创建.browserslistrc文件(如果不创建.browserslistrc文件 , 默认是找package.json文件下的browserslistrc属性).  

``` bash
>0.01%
```

## 注意事项  

* .browserslistrc文件 和package.json文件配置不生效.  

  务必配置postcss.config.js文件引入 autoprefixer , 或者在webpack 引入autoprefixer
