const path = require("path");
const webpack = require("webpack");
const css = require('css-loader');

module.exports = {
    entry: "./src/index.jsx",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: ['file-loader'],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['css-loader'],
            },
        ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 8081,
        publicPath: '/',
        historyApiFallback: true,
        publicPath: "http://localhost:8081/dist/",
        hotOnly: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};
