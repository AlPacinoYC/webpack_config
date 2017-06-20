const HtmlWebpackPlugin = require('html-webpack-plugin');//热跟新必须加载这个模板
var path = require('path')
var webpack = require('webpack')
module.exports = {
  entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/public",//打包后的文件存放的地方
    filename: "bundle-[hash].js"//打包后输出文件的文件名,hash对应缓存
  },
    module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',//在webpack的module部分的loaders里进行配置即可
        query: {
          presets: ['es2015','react']
        }
      },
       {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules'//跟前面相比就在后面加上了?modules
      }
    ]
  },
  devtool: '#source-map',
   devServer: {
     historyApiFallback: true,//不跳转
     noInfo: true,
     inline: true,//实时刷新
     //hot:true  /*hot和inline一起写inline会失效*/
     
  },
  plugins: [
   new HtmlWebpackPlugin({
      title: 'Webpack demo',
    }),
    new webpack.HotModuleReplacementPlugin(),//热加载插件
    new webpack.optimize.UglifyJsPlugin(),//压缩js
  ]
  
}