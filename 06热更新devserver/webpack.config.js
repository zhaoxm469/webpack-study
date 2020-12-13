const { resolve, join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'build.js',
        path: resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.css/,
            use: ['style-loader', 'css-loader'],
        }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
    ],
    mode: 'development',
    devServer: {
        contentBase: join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        open: true,
    },
};
