# tiny-react-app-search-widget

## CSS Modules in React
In the `index.js`, import the styles as follows:

```javascript
import styles from './index.css';
```
Note that we have to explicitly add the `.css` file extension here, because if we don't, node is going to assume that it's a `.js` file

Then make sure that you configure css modules in the webpack config file:

```javascript
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]-[local]-[hash:base64:6]',
              camelCase: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
};
```

