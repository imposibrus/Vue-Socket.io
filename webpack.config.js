var path = require('path');

module.exports = {
    entry: ['./src/Main.js'],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'build.js',
        library: ['VueSocketio'],
        libraryTarget: 'umd'
    },
    devtool: "source-map",
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};
