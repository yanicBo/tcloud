const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

function resolve (paths) {
    return path.resolve(__dirname, paths);
}

const webpackConfigCommon = {
    entry: {
        index: resolve('../src/index.js')
    },
    output: {
        path: resolve("../dist"),
        filename: "js/[name].[chunkhash:8].js",
        chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
        publicPath: "/"
    },
    resolve: {
        alias:{
            assetes: resolve("../src/assetes"),
            components: resolve("../src/components"),
            configs: resolve("../src/configs"),
            pages: resolve("../src/pages"),
            routers: resolve("../src/routers"),
            utils: resolve("../src/utils")
        }
    },
    resolveLoader: {
        moduleExtensions: ['-loader']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: [resolve("../src")],
                use: {
                    loader: "babel-loader?cacheDirectory=true"
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader", options: {
                        sourceMap: true
                    }
                }, {
                    loader: "less-loader", options: { javascriptEnabled: true }
                }]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: false }
                    }
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)$/,
                loader: 'url-loader',
                query: {
                    limit: 500,
                    name: 'images/[name].[hash:8].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '树云',
            template: resolve("../public/index.html"),
            filename: "index.html",
            favicon: resolve("../public/favicon.ico"),
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[chunkhash:8].css",
            chunkFilename: "css/[name].[chunkhash:8].chunk.css"
        })
    ]
};

module.exports = webpackConfigCommon;








