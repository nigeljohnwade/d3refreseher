const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleStatsWebpackPlugin } = require('bundle-stats-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: '[name].[hash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    'useBuiltIns': 'entry',
                                    'targets': 'last 1 version',
                                },
                            ],
                        ],
                    },
                },
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'D3 Refresher',
            scriptLoading: 'defer',
            hash: true,
            templateContent: '<!DOCTYPE html>\n' +
                '<html lang="en">\n' +
                '  <head>\n' +
                '    <meta charset="utf-8" />\n' +
                '    <link rel="icon" href="public/favicon.ico" />\n' +
                '    <meta name="viewport" content="width=device-width, initial-scale=1" />\n' +
                '    <meta name="theme-color" content="#000000" />\n' +
                '    <meta\n' +
                '      name="description"\n' +
                '      content="Web site created using d3"\n' +
                '    />\n' +
                '\n' +
                '    <title>D3 Refresher</title>\n' +
                '  </head>\n' +
                '  <body>\n' +
                '  <div id="app-d3Root">\n' +
                '    <div id="app-d3ListRoot"></div>\n' +
                '    <div id="app-d3BarChartRoot"></div>\n' +
                '    <div id="app-d3ColumnChartRoot"></div>\n' +
                '  </div>\n' +
                '  </body>\n' +
                '</html>\n',
        }),
    ],
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
};
