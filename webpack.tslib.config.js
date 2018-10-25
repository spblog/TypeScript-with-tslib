let path = require('path');

module.exports = {
    entry: './src/index.ts',
    mode: "production",
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle-with-tslib.js'
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/, loader: "ts-loader", options: {
                    compilerOptions: {
                        "importHelpers": true
                    }
                }
            }
        ]
    }
}