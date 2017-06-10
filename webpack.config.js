'use strict'

var webpack = require('webpack')

var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var jsFolderName = 'build'
var htmlPath = jsFolderName + '/'

module.exports = {
    context: path.join(__dirname, '/'),
    entry: {
        app: [
            'webpack/hot/dev-server',
            './src/app.module'
        ]
    },
    output: {
        path: path.join(__dirname, htmlPath),
        filename: 'bundle.js',

    },
    module: {
        loaders: [{
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.js$/,
                loader: 'ng-annotate',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'html'
            }, ,
            {
                test: /\.(png|jpe?g|gif|woff|woff2|eot|ttf|svg)(\?[\s\S]+)?$/,
                loader: 'file?name=[name].[ext]'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js'],
        alias: {
            'utils': path.resolve(__dirname, './utils.dev')
        }
    },
    plugins: [
        new webpack.ProvidePlugin({ 'utils': 'utils' }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({ '_': 'lodash', $: "jQuery", jQuery: "jQuery" }),
        // definePlugin takes raw strings and inserts them, so you can put strings of JS if you want.
        new webpack.DefinePlugin({ __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')) }),
        new HtmlWebpackPlugin({ path: path.join(__dirname, htmlPath), filename: './index.html', template: './index.html' }),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: false,
            mangle: true
        })
    ],
    devServer: {
        port: 1885
    }
}