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
            '/api/user': {
                target: 'http://192.168.201.212:8080',
                changeOrigin: true
            },
            // 订单管理系统模块
            '/api/oms': {
                target: 'http://192.168.201.212:8080',
                changeOrigin: true
            },
            // 系统管理模块
            '/api/grab': {
                target: 'http://192.168.201.213:8081',
                changeOrigin: true
            }
        }
    }
}

module.exports = merge( common, webpackConfigDev );