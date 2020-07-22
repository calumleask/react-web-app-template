const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const SRC_DIR = path.resolve(__dirname, "src");
const BUILD_DIR = path.resolve(__dirname, "dist");

module.exports = ({
    entry: SRC_DIR + "/web/index.js",
    output: {
        path: BUILD_DIR,
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [SRC_DIR],
                loader: "babel-loader"
            },
            {
                test: /\.tsx?$/,
                include: [SRC_DIR],
                loader: "babel-loader",
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                { from: "public", to: BUILD_DIR }
            ]
        })
    ],
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        modules: ["node_modules"],
        alias: {
            "~": SRC_DIR
        }
    }
});
