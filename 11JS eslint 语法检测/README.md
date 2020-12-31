# JS eslint 语法检测

eslint-loader 已经 `不推荐使用了` , 停止更新了!! 现在使用下面这个插件

[eslint-webpack-plugin](https://www.npmjs.com/package/eslint-webpack-plugin) 用于Webpack的ESLint插件.  

## 代码

首先安装

``` bash
npm install eslint-webpack-plugin --save-dev
```

注意:eslint >= 7如果尚未安装, 还需要从npm安装:

``` bash
npm install eslint --save-dev
```

webpack.config.js配置

``` js
plugins: [
    new EslingPlugin({
        // 默认开启自动修复
        fix: true,
    })
],
```

## 注意事项  

eslint-loader 已经停止更新, 官方文档推荐用eslint-webpack-plugin
