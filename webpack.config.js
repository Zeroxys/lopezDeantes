const path = require("path")
const browserSyncPlugin = require("browser-sync-webpack-plugin")
const cleanWebpackPlugin = require("clean-webpack-plugin")
const htmlWebpackPlugin = require("html-webpack-plugin")
const extractTextPlugin = require("extract-text-webpack-plugin")
const webpack = require("webpack")

module.exports = {
  entry : "./src/js/index.js",
  output : {
    path : path.resolve(__dirname, "dist"),
    filename : "bundle.js"
  },

  module : {
    rules : [
      {
        test : /\.css/, use : extractTextPlugin.extract({
          use : ["css-loader", "postcss-loader"]
        })
      },

      {
        test : /\.js$/, exclude : /\.(node_modules)/, use : [
          {
            loader : "babel-loader",
            options : {
              presets : ["es2015"]
            }
          }
        ]
      },

      {
        test: /\.html/, use : ["html-loader"]
      },

      {
        test: /\.(jpg|png)/, use : [
          {
            loader : "file-loader",
            options : {
              name : "[name].[ext]",
              outputPath : "img/"
            }
          }
        ]
      },

      {
        test: /\.html/, exclude: path.resolve(__dirname, "src/index.html"), use : [
          {
            loader : "file-loader",
            options : {
              name : "[name].[ext]"
            }
          }
        ]
      },

      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/, use : [
          {
            loader: "url-loader",
            options : {
              limit:8192,
              name: "[name].[ext]",
              outputPath : "fonts/"
            }
          }
        ]
      },

      {
         test: /\.(ttf|eot|svg|otf)(\?[\s\S]+)?$/, use : [
          {
            loader: "file-loader",
            options : {
              name: "[name].[ext]",
              outputPath : "fonts/"
            }
          }
        ]
      },

    ]
  },

  plugins : [
    new webpack.ProvidePlugin({
      $ : "jquery",
      jQuery: "jquery"
    }),

    new browserSyncPlugin({
      host : "localhost",
      port : 3000,
      server : {
        baseDir: ["dist"]
      },
      open: false
    }),

    new htmlWebpackPlugin({
      template : "./src/index.html",
      favicon: "./src/img/favicon.png"
    }),

    new extractTextPlugin("styles.css"),

    new cleanWebpackPlugin(["dist"])

  ]
}