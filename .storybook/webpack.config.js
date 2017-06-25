const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const appRootDir = require('app-root-dir');

module.exports = {
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            insertInto: 'body'
                        }
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
                            insertInto: 'body'
                        }
                    },
                    { loader: 'css-loader' },
                ],
                include: path.join(__dirname, '..', 'node_modules'),
            },
            {
                test: /\.svg$/,
                loader: 'raw-loader',
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
        ]
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.css',
            '.scss',
            '.less',
            '.json'
        ],
        alias: {
            MOCK: path.resolve(appRootDir.get(), './src/__mock__'),
        },
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
            },
        }),
    ],
};
