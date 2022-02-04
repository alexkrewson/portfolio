const path = require('path');

module.exports = {
    // plugins: [
    //     new LiveReloadPlugin(options)
    // ],
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    watchOptions: {
        poll: true,
        ignored: '/node_modules/',
    },
    devServer: {
        open: true,

        watchOptions: {
            poll: true,
            ignored: "/node_modules/"
        }
    },

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};

// var LiveReloadPlugin = require('webpack-livereload-plugin');
// mix.webpackConfig({
//     plugins: [
//         new LiveReloadPlugin()
//     ]
// });