const path = require('path');
// const eslintFormatter = require('react-dev-utils/eslintFormatter'); // Disable ESLint Formatter
const src = path.resolve(__dirname, 'src');

module.exports = {
  mode: 'production', 
  entry: [
    'babel-polyfill',
    './src/index.js'
  ],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            cacheDirectory: true,
            presets: ['@babel/preset-env', '@babel/preset-react'], // Ensure Babel is configured correctly
            plugins: ['@babel/plugin-proposal-class-properties'], // Include any plugins required
          },
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Ensure these extensions are resolved correctly
    fallback: { // Include fallbacks for Node.js modules if needed
      "path": require.resolve("path-browserify"),
      "fs": false
    }
  },
  externals: {
    // Don't bundle peer dependencies
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    },
    "prop-types": {
      commonjs: "prop-types",
      commonjs2: "prop-types",
      amd: "PropTypes",
      root: "PropTypes"
    },
    "draft-js": {
      commonjs: "draft-js",
      commonjs2: "draft-js",
      amd: "draft-js",
      root: "draft-js"
    }
  }
};

