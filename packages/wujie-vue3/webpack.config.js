const path = require('path')

module.exports = {
  entry: './index.js',
  target: ["web", "es5"],
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, './lib'),
    filename: 'index.js',
    library: 'WujieVue',
    libraryExport: 'default',
    libraryTarget: 'umd',
    globalObject: 'self',
    umdNamedDefine: true
  },
  mode: "production",
  // 告诉Webpack不要将某些模块打包进输出文件，而是从外部环境（如全局变量、CDN 或外部库）中加载它们
  externals: {
    // 为vue提供了四种不同的模块系统支持
    vue: {
      // 运行在浏览器环境下时,从全局变量名Vue中获取js
      root: "Vue",
      commonjs: "vue",
      commonjs2: "vue",
      amd: "vue"
    }
  },
  resolve: {
    extensions: ['.js']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
