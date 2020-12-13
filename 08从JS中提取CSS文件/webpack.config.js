const { join, resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'js/build.js',
        path: resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        }, {
            test: /\.(png|gif|jpeg|jpg)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8 * 1000,
                },
            }],
        }, {
            test: /\.html$/,
            use: ['html-loader'],
        }, {
            exclude: /.(html|png|gif|jpg|jpeg|scs|css|js)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    outputPath: 'fonts',
                },
            }],

        }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    mode: 'development',
    devServer: {
        contentBase: join(__dirname),
        open: true,
        port: 3000,
    },
};
