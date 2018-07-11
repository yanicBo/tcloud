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
        port: 8081,
        proxy: {
            // 登录模块
            '/urc/motan/service/api/IUrcService/': {
                target: 'http://192.168.201.211:8000'
            }
        }
    }
}

module.exports = merge( common, webpackConfigDev );