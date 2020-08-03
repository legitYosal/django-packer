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
        // filename: '[name].[contenthash].js',
        // chunkFilename: '[name].[contenthash].js',
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist', 'build'),
    },
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     loader: 'eslint-loader',
            //     exclude: /node_modules/,
            //     options:{},
            // },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    'eslint-loader',
                ],
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
    resolve: {
        extensions: ['*', '.js', ],
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