const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    context: path.resolve(__dirname),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '我titile',
            template: './index.html',
            name: '123',
            meta: {
                charset: { charset: 'utf-8' },
                viewport: 'width=device-width, initial-scale=1',
            },
        }),
    ],
    mode: 'development',
};
