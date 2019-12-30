const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const srcDir = path.resolve(__dirname, "src");
const distDir = path.resolve(__dirname, "dist");

module.exports = {
  //watch: false,
  context: srcDir,
  entry: {
    main: ["./index.js"]
  },
  output: {
    path: distDir,
    filename: "[name].[chunkhash].js",
    publicPath: "/"
  },
  resolve: {
    modules: [
      path.resolve(__dirname, "node_modules"),
      path.resolve(__dirname, "src")
    ],
    extensions: [
      ".js",
      ".mjs",
      ".html",
      ".css",
      ".scss",
      ".jpg",
      ".jpeg",
      ".svg",
      ".png"
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    modules: false,
                    useBuiltIns: "usage",
                    loose: true,
                    targets: {
                      //browsers: ["last 2 versions", "> 5%", "ie 11"]
                      browsers: [
                        "Chrome >= 77",
                        "Safari >= 12",
                        "iOS >= 11",
                        "Firefox >= 70",
                        "Edge >= 15",
                        "> 5%",
                        "not IE 11"
                      ]
                    }
                  }
                ]
              ]
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                importLoaders: 1
              }
            },
            "postcss-loader"
          ]
        }),
        exclude: /node_modules/
      },
      {
        test: /\.(html)$/,
        use: "html-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
      template: path.join(srcDir, "index.html"),
      path: distDir,
      filename: "index.html",
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true
      }
    })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: srcDir,
    publicPath: "/",
    host: "0.0.0.0",
    port: 3000,
    open: true
  }
};
