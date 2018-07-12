const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');

const webpackConfigDev = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        host: 'localhost',
        contentBase: '../dist',
        disableHostCheck: true,
        historyApiFallback: true,
        port: 8082,
        proxy: {
            '/urc/motan/service/api/IUrcService/': {
                target: 'http://10.90.1.204:8000',
                changeOrigin: true
            },
            '/customs/api/': {
                target: 'http://10.90.1.204:8000',
                changeOrigin: true
            }
        }
    }
}

module.exports = merge( common, webpackConfigDev );