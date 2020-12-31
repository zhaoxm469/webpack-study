const { resolve } = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const EslingPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: resolve(__dirname, './src/main.js'),
    output: {
        filename: 'js/bundel.js',
        path: resolve(__dirname, 'dist'),
        publicPath: './',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', {
                    loader: 'postcss-loader',
                }, 'sass-loader'],
            },
            {
                test: /\.(png|gif|jpe|jpeg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10 * 10,
                        name: 'images/[name][hash:8].[ext]',
                        publicPath: '../',
                    },
                }],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: [{
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
                }],
            },
            {
                exclude: /\.(html|js|css|scss|png|jphg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'others/',
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, './src/index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: 'style/[contenthash:8].css',
        }),
        new CleanWebpackPlugin(),
        new EslingPlugin({
            fix: true,
        }),
    ],
    mode: 'production',
    devServer: {
        contentBase: resolve(__dirname, 'dist'),
        host: '0.0.0.0',
        open: true,
    },
};
