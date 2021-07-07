const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/i,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ]
        }, {
            test: /\.(jpg|png)$/,
            use: {
                loader: 'url-loader',
            }

        }]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true
    },
    plugins: [new MiniCssExtractPlugin({
        insert: '#bundledstyles',
        filename: 'bundledstyles.css'
    })]
}