const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        app: './src/index.js',
        // print: './src/print.js',
    },
    output: {
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist', 'build'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
            
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
    optimization: {
        // runtimeChunk: 'single',
        moduleIds: 'hashed',
        splitChunks: {
            chunks: 'all',
        },
    },
}