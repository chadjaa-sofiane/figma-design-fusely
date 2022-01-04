const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { join } = require("path");

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  devtool: !isProduction ? "source-map" : false,
  mode: isProduction ? "production" : "development",
  target: "web",
  entry: "./src/index.jsx",
  output: {
    // eslint-disable-next-line no-undef
    path: join(__dirname, "dist"),
    filename: "bundle.[hash].js",
    publicPath: "/",
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
          options:{
            limits : 50000
          }
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    host: "localhost",
    port: 3000,
    historyApiFallback: true,
    open: true,
  },
};
