const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: './homework/src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './homework/dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLPlugin({
            filename: 'index.html',
            template: './homework/src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                enforce: "pre",
                use: ["source-map-loader"],
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, "less-loader"]
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, './homework/dist'),
        port: 4200,
        overlay: true,
        open: true
    }
}
