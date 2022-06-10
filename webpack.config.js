const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackBundleAnalyzer = require("webpack-bundle-analyzer");
const { resolve } = require("path");

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  devtool: !isProduction ? "inline-source-map" : false,
  mode: isProduction ? "production" : "development",
  target: "web",
  // eslint-disable-next-line no-undef
  entry: resolve(__dirname, "./src/index.jsx"),
  output: {
    // eslint-disable-next-line no-undef
    path: resolve(__dirname, "dist"),
    filename: "bundle.[chunkhash].js",
  },
  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_module/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /.css$/,
        exclude: /node_module/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              module: true,
              localsConvention: "camelCase",
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              svgoConfig: {
                plugins: [
                  {
                    name: "prefixIds",
                    cleanupIDs: false,
                  },
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|ttf)$/i,
        use: {
          loader: "url-loader",
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new WebpackBundleAnalyzer.BundleAnalyzerPlugin({
      analyzerMode: "static",
      openAnalyzer: false,
    }),
  ],
  devServer: {
    historyApiFallback: true,
    open: true,
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
};
