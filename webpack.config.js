const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  // mode: 'development',
  // mode: 'production',
  entry: {
    index: './lib/index.tsx'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib'), //绝对路径
    library: 'ICON',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      },
    ]
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title:'sundjly',
  //     template: 'index.html'
  //   })
  // ],
  // externals: { // 在依赖中排除第三方包
  //   react: {
  //     commonjs: 'react',
  //     commonjs2: 'react',
  //     amd: 'react',
  //     root: 'React',
  //   },
  //   'react-dom': {
  //     commonjs: 'react-dom',
  //     commonjs2: 'react-dom',
  //     amd: 'react-dom',
  //     root: 'ReactDOM',
  //   },
  // }
};