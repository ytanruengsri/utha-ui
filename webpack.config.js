const path = require('path');
const packageName = require('./package.json').name;
const SpritePlugin = require('../../plugin');

module.exports = {
    context: __dirname,
    entry: './index',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist/',
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            insertInto: 'body',
                        },
                    },
                    {
                        loader: 'css-loader',
                    },
                    { loader: 'postcss-loader' },
                    { loader: 'sass-loader' },
                ],
                exclude: path.join(__dirname, '..', 'node_modules'),
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            insertInto: 'body',
                        },
                    },
                    { loader: 'css-loader' },
                ],
                include: path.join(__dirname, '..', 'node_modules'),
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-sprite-loader',
                        options: {
                            extract: true,
                        },
                    },
                    'svgo-loader',
                ],
            },
            {
                test: /\.json/,
                loader: 'json-loader',
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: 'images/[name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        alias: {
            [packageName]: path.resolve(__dirname, '..'),
        },
    },
    resolveLoader: {
        alias: {
            [packageName]: path.resolve(__dirname, '..'),
        },
    },
    plugins: [
        new SpritePlugin(),
    ],
};
