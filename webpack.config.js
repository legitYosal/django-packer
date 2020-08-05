const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const BundleTracker = require('webpack-bundle-tracker')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        app: './src/index.js',
        // print: './src/print.js',
    },
    output: {
        // filename: '[name].[contenthash].js',
        // chunkFilename: '[name].[contenthash].js',
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist', 'build'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    'eslint-loader',
                ],
            },
            { 
                test: /\.vue$/, 
                use: 'vue-loader' 
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.s[ca]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
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
        new VueLoaderPlugin(),
        new BundleTracker({
            path: __dirname,
            filename: './webpack-status.json'
        }),
        new HtmlWebpackPlugin({template: './dist/test.html'})
    ],
    optimization: {
        // runtimeChunk: 'single',
        moduleIds: 'hashed',
        splitChunks: {
            chunks: 'all',
        },
    },
}