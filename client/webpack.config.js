// /* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs")
const path = require("path")

// eslint-disable-next-line import/no-extraneous-dependencies
const dotenv = require("dotenv")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const webpack = require("webpack")

dotenv.config()
const isDevelopment = ["development", "test", "e2e"].includes(
  process.env.REACT_ENV || "development"
)

const initialEntryPoints = isDevelopment ? ["webpack-hot-middleware/client?reload=true"] : []

const appDirectory = fs.realpathSync(process.cwd())

const resolveAppPath = (relativePath) => path.resolve(appDirectory, relativePath)

let reactDomAlias = {}
if (isDevelopment) {
  reactDomAlias = {
    "react-dom": "@hot-loader/react-dom",
  }
}
module.exports = {
  target: "web",
  entry: [...initialEntryPoints, path.join(__dirname, "./src/main")],
  context: path.resolve(__dirname),
  devtool: isDevelopment ? "source-map" : false,
  mode: isDevelopment ? "development" : "production",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.REACT_ENV": JSON.stringify(process.env.REACT_ENV),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? "[name].css" : "[name].[hash].css",
      chunkFilename: isDevelopment ? "[id].css" : "[id].[hash].css",
    }),
    new HtmlWebpackPlugin({
      title: "Consultancy Breakable Toy",
      template: path.join(__dirname, "public/index.template.html"),
    }),
  ],
  module: {
    rules: [
      // {
      //   test: /\.(ts|tsx)$/,
      //   exclude: /(node_modules|bower_components)/,
      //   loader: "awesome-typescript-loader",
      //   options: {
      //     // useCache: true,
      //     transpileOnly: true,
      //   },
      // },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"], cwd: path.resolve(__dirname) },
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2)$/i,
        // exclude: /(node_modules|bower_components)/,
        loader: "file-loader",
      },
      {
        test: /\.pcss$/,
        use: [
          isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, "postcss.config.js"),
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      ...reactDomAlias,
    },
    extensions: ["*", ".js", ".scss", ".css", ".pcss", ".ttf", ".tsx", ".ts", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  devServer: {
    contentBase: resolveAppPath("public"),
    historyApiFallback: true,
    port: 3000,

    publicPath: "/",
    hot: true,
    proxy: [
      {
        context: ["/api/v1"],
        target: "http://localhost:4000",
      },
    ],
  },
}
