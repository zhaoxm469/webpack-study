# CSS兼容性处理

选用[postcss-loader](https://github.com/postcss/postcss/blob/main/docs/README-cn.md) + [postcss-preset-env](https://github.com/csstools/postcss-preset-env)  或者[autoprefixer](https://www.npmjs.com/package/autoprefixer) 来处理css浏览器兼容性问题.  
[postcss-loader](https://github.com/postcss/postcss/blob/main/docs/README-cn.md) 它是一个利用JS插件来为CSS进行转换的工具, 例如CSS兼容性压缩等功能.  
*需要注意 如果使用 [postcss-preset-env](https://github.com/csstools/postcss-preset-env) 就不需要使用 [autoprefixer](https://www.npmjs.com/package/autoprefixer) 了, 因为 postcss-preset-env包含autoprefixer内的功能

postcss-preset-ebv 支持任何标准 browserslist 配置, 可以是一个 .browserslistrc 文件、 browserslist 关键在 package.json , 或 browserslist 环境变量.

[postcss-px-to-viewpor](https://github.com/evrone/postcss-px-to-viewport/blob/master/README_CN.md) 将px单位转换为视口单位的 (vw, vh, vmin, vmax) 的 PostCSS 插件.
[Browserslist文档](https://github.com/browserslist/browserslist)
[caniuse](https://www.caniuse.com/) 用来查询css 兼容性网站.  

## 说明

下面例子中在webpack.loader 里都用到了 MiniCssExtractPlugin.loader.
次插件的loader主要作用是将css打包分离成单独的样式文件

## 使用 postcss-loader + postcss-preset-env CSS处理兼容性

安装loader

``` bash
npm install -D postcss-loader postcss-preset-env
```

webpack.config.js使用loader

``` js
module: {
    rules: [{
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader'],
    }],
}
```

创建并配置postcss.config.js文件

``` js
module.exports = {
    plugins: [
        [
            'postcss-preset-env',
        ],
    ],
};
```

最后在package.json 配置 或者配置新建.browserslistrc文件进行配置

``` json
{
    "browserslist": [
        "cover 99.5%"
    ]
}
```

## 使用 postcss-loader + autoprefixer CSS处理兼容性

安装loader

``` bash
npm install -D postcss-loader autoprefixer
```

webpack.config.js使用loader browserslist

``` js
module: {
    rules: [{
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader'],
    }],
}
```

创建并配置postcss.config.js文件

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

  务必配置postcss.config.js文件引入 )(autoprefixer|postcss-preset-env) , 或者在webpack 引入(autoprefixer|postcss-preset-env)

* postcss配置查找规则

  首先postcss会查找package.json下的配置
  然后是.postcssrc JSON 或者 YAML格式的文件
  或者 postcss.config.js 文件 或者 postcss.config.cjs commonJS 模块导出的对象
  当然也可以在不同的目录使用不同的postcss.config.js 他会根据 path.dirname 向上查找, 直到找到一个配置文件.

  推荐在根目录 创建postcss.config.js文件  
  例:

``` js
module.exports = {
    plugins: [
        [
            'postcss-preset-env',
            {
                // Options
            },
        ],
    ],
};
```

* browserslist 查找规则(webpack.config.js在查找browserslist是从内向外找的, 找到就会停下来)

  1) webpack.config.js > postcss.config.js
  2) postcss.config.js > .browserslistrc
  3) postcss.config.js > package.json
  4) package.json和.browserslistrc只能定义一个, 否则会冲突  
