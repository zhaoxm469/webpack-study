# webpack学习

这里记录了, 在学习webpack过程中的一些源码和笔记.  
笔记默认都放在子目录的README.md文件夹里了

[webpack loaders](https://www.webpackjs.com/loaders/) 官方loader列表
[webpack plugins](https://www.webpackjs.com/plugins/) 官方插件列表

## 依赖使用  

示例文件夹中, 所有引用的依赖都来自于 webpack-study/node_modules 文件夹下

例如: 【02webpack样式打包文件夹】 所用到的 依赖都来自于 webpack-study/node_modules 文件夹
这样的好处是: 避免在每一个目录都创建了一个nodemodule , 默认让他们共同引用一个父亲下的node_modules
