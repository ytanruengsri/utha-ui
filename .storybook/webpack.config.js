const webpack = require('@kadira/storybook/node_modules/webpack');
const path = require('path');
const appRootDir = require('app-root-dir');

module.exports = {
    module: {
        loaders: [
            {
                test: /\.(css|scss)$/,
                loaders: [
                    'style-loader?insertInto=body',
                    'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                    'postcss-loader',
                    'sass-loader',
                ],
                exclude: path.join(__dirname, '..', 'node_modules'),
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader?insertInto=body',
                    'css-loader'
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
                loaders: ['url-loader?limit=1024&name=images/[name].[ext]'],
            },
        ]
    },
    resolve: {
        extensions: [
            '',
            '.js',
            '.jsx',
            '.css',
            '.scss',
            '.less',
        ],
        alias: {
            _src: path.resolve(appRootDir.get(), './packages/ui/src'),
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
