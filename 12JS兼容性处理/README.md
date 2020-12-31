# JS兼容性处理

[babel官网](https://www.babeljs.cn/)  
[查看babel配合各个工具的指南](https://www.babeljs.cn/setup#installation)  

## webpack.config.js babel 配置 (兼容性基本处理)

首先安装

``` bash
npm install --save-dev babel-loader @babel/core @babel/preset-env
```

webpack.config.js配置

``` js
{
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
}
```

也可以在根目录创建.babel.config件进行设置

``` json
{
  "presets": ["@babel/preset-env"]
}
```

** 以上只是低级转换, promise是不会转换的. 下面有其他方法进行语法转换.

## 全部JS兼容性( 在线转换) 处理

但如果想要全部转换(在线转换), 可以在页面入口引用@babel/polyfill文件. 这样就能兼容所有ES2015+所有代码.  

安装依赖

``` bash
npm install -S @babel/polyfill
```

main.js文件顶部加入以下代码

``` js
import '@babel/polyfill';
```

这样的方式用起来很方便, 兼容性也很好, 但是打包的体积会变得非常大!  
所以不太建议这样使用, 可以配合@babel/preset-env +useBuiltIns 达到按需使用.  

## 按需转换

** 因为从7.4.0版本以后 就用core-js@3 代替@babel/polyfill 所以需要安装 core-js@3  

代码

``` bash
    npm install -S core-js@3
```

``` js
{
    test: /\.m?js$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: [
                [
                    '@babel/preset-env',
                    {
                        // 是否按需加载
                        useBuiltIns: 'usage',
                        // 指定core-js版本
                        corejs: {
                            version: 3,
                        },
                        // 指定兼容哪些浏览器的版本
                        targets: {
                            chrome: '58',
                            ie: '9',
                        },
                    },
                ],
            ],
            plugins: [
                [
                    // 支持ES7 async await 语法
                    '@babel/plugin-transform-runtime',
                ],
            ],
        },
    }
}
```

## 注意事项  

1. import "core-js" ; import "regenerator-runtime/runtime" ; 等价于import '@babel/polyfill'; 如果用了'@babel/polyfill'在其他页面再导入 core-js 和 regenerator-runtime/runtime 页面会报错。
