const webpack = require("webpack");
const version = new Date().getTime();
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const isProduction = process.env.NODE_ENV == "production";

// 配置
module.exports = {
    pages: {
    },
    // 基本路径
    publicPath: "/compile",
    // 输出文件目录
    outputDir: "../../BasePlus/PC",
    // 生产环境不需要代码检查
    lintOnSave: false,
    // 是否启用运行时编译
    runtimeCompiler: true,
    // 是否需要生产环境源码
    productionSourceMap: false,
    // 通过 Babel 显式转译一个依赖
    transpileDependencies: ["dom7", "swiper"],
    configureWebpack: {
        //devtool: !isProduction ? "source-map" : "nosources-source-map",
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "windows.jQuery": "jquery"
            }),
            new OptimizeCssAssetsPlugin()
        ],
        output: {
            filename: "JS/[name].js?v=" + version,
            chunkFilename: "JS/[name].js?v=" + version,
            // libraryExport: 'LZDV'
        },
        optimization: {
            splitChunks: {
                chunks: "all",
                minSize: 20000,
                minChunks: 1,
                cacheGroups: {
                    vendors: {
                        name: "Vendors",
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10,
                        chunks: "initial"
                    },
                    common: {
                        name: "Common",
                        minChunks: 2,
                        priority: -20,
                        chunks: "initial",
                        reuseExistingChunk: true
                    },
                    venders: false,
                    "default": false
                }
            }
        }
    },
    filenameHashing: false,
    css: {
        extract: { // 打包后css文件名称添加时间戳
            filename: "CSS/[name].css?v=" + version,
            chunkFilename: "CSS/[name].css?v=" + version
        }
    },
    chainWebpack: config => {
        const imageUrlLoader = config.module.rule("images")
        // 清除已有的所有 loader。
        // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
        imageUrlLoader.uses.clear()
        // 添加要替换的 loader
        imageUrlLoader
            .test(/\.(png|jpg|gif)$/i)
            .use("url-loader")
            .loader("url-loader")
            .options({
                limit: 1, // 8k
                esModule: false,
                name: "Images/[name].[ext]?v=" + version, // 利用[path]路径获取文件夹名称并设置文件名
                fallback: "file-loader" // 当超过8192byte时，会回退使用file-loader
                // context: path.resolve(__dirname, './src'),//过滤掉[path]的相对路径
            });

        const fontsLoader = config.module.rule("fonts")
        // 清除已有的所有 loader。
        // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
        fontsLoader.uses.clear()
        fontsLoader
            .test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/i)
            .use("url-loader")
            .loader("url-loader")
            .options({
                limit: 1, // 8k
                esModule: false,
                name: "Fonts/[name].[ext]?v=" + version, // 利用[path]路径获取文件夹名称并设置文件名
                fallback: "file-loader" // 当超过8192byte时，会回退使用file-loader
            });
    }
}
