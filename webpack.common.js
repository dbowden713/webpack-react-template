module.exports =  {
    entry: {
        main: "./src/index.js",
        vendor: "./src/vendor.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpe?g|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name]-[contentHash].[ext]",
                        outputPath: "imgs",
                        esModule: false
                    }
                }
            }
        ]
    }
};