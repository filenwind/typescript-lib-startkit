import webpack from 'webpack';
import appRootPath from 'app-root-path';
import { TsConfigPathsPlugin } from 'awesome-typescript-loader';
import webpackNodeExternals  from 'webpack-node-externals';
import readPkg from 'read-pkg';

const mode = process.env.NODE_ENV === 'development' ? 'development' : 'production';

const packageJson = readPkg.sync();

const config: webpack.Configuration = {
  mode,
  entry: appRootPath.resolve('./src/app'),
  output: {
    path: appRootPath.resolve('./dist/app'),
    filename: 'index.js',
    library: packageJson.name, // lib name
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
    plugins: [
      new TsConfigPathsPlugin({ compiler: 'ttypescript' }),
    ],
  },
  externals: [webpackNodeExternals()], // don't pack node_modules
};

export default config;
