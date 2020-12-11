# 学前准备  

[webpack官方文档](https://www.webpackjs.com/concepts/)

环境参数  

* nodejs 10 版本以上
* webpack 4.26版本以上  

## webpak 是什么

webpack是一个现代javascript应用程序静态的打包器, 他会将程序所需要的每个模块, 打包成一个或者多个bundle

## webpack 五个核心概念

* entry

  配置的模块入口, webpack执行构建的第一步将从入口开始搜集递归解析所有的入口依赖

* output

  webpack 打包输入的路径

* loader  

  翻译官, 将非javascript , css等语言, 转换成浏览器能识别的语言

* plugins

  插件, 可执行打包压缩等相关功能. 插件接口功能很强大, 可以用来处理各种各样的任务.

* Model

  通过选择 development 或 production 之中的一个, 来设置 mode 参数, 你可以启用相应模式下的 webpack 内置的优化  
