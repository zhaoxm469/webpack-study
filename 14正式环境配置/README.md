# 说明  

这节主要是手露一个生产环境的webpack的配置
其中涉及到:

1. CSS 代码的压缩           -> mode:production
2. CSS 兼容性的处理         -> postcss-loader
3. CSS 打包文件，如果其他CSS文件没有发生改变的话，文件名不重新生成，引用地址还是老的之前得CSS引用地址 -> 文件指纹变量
4. 图片转base64             -> url-loader
5. 图片压缩                 ->  
6. 其他资源得loader处理      -> file-loader
7. js压缩                  -> mode:production
8. js兼容性处理             -> babel-loader  
9. js代码校验              -> eslint-webpack-plugin

## 注意事项

* js引入iconfont 字体的时候报路径的错误 , 在webpack.config.js 加入  publicPath: './' 即可.
* 在filename 前边加上 文件夹路径, 打包会自动放到指定文件夹下.  例如 : filename:bundel.js  改成 js/bundel.js 会在dist自动生成 dist/js/budel.js 
