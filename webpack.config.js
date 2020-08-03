const path                  = require('path');
const VueLoaderPlugin       = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
const SpriteLoaderPlugin    = require('svg-sprite-loader/plugin');
const CleanWebpackPlugin    = require('clean-webpack-plugin');
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");



const config = {
    entry:
        {
            'bundle': './source/index.js',
        },
    output: {

        filename: '[name].js',
        chunkFilename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build/'

    },
    // watch: devMode,
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }, {
            // vue-loader config to load `.vue` files or single file components.
            test: /\.vue$/,
            loader: 'vue-loader',

        }, {
            test: /\.(scss|css)$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader', 'postcss-loader', 'sass-loader'
            ]
        }, {
            test: /\.(ttf|eot|woff|woff2)$/,
            use: {
                loader: "file-loader",
                options: {
                    name: "fonts/[name].[ext]",
                },
            },
        },
            {
              test: /\.(webp|png|jpg|jpeg|svg|gif|webmanifest|ico|xml)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "img/[name].[ext]",
                    },
                },
            },

            // {
            //     test: /\.svg$/,
            //     loader: 'svg-sprite-loader',
            //     options: {
            //         extract: true,
            //         spriteFilename: 'img/i-sprite.svg',
            //         runtimeCompat: true
            //     }
            // }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' для webpack 1
        }
    },
    devServer: {
      contentBase: path.join(__dirname, 'source/html'),
      compress: true,
      liveReload: true,
      open: true,
      port: 3000
    },
    // optimization: {
    //     splitChunks: {
    //         // include all types of chunks
    //         chunks: 'all',
    //     }
    // },
    plugins: [
        new CleanWebpackPlugin([__dirname + '/build']),
        new SpriteLoaderPlugin(),

        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].[contenthash].css',
        }),
        new VueLoaderPlugin(),
        new ImageminWebpWebpackPlugin(),
    ]
};

module.exports = config;
