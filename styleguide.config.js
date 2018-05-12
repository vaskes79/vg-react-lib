module.exports = {
  title: "vg react lib",
  components: "src/components/**/*.jsx",
  theme: {
    fontFamily: {
      base:
        "'SFPro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    }
  },
  styles: {
    Para: {
      para: {
        display: "none"
      }
    }
  },
  webpackConfig: {
    module: {
      rules: [
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        // Other loaders that are needed for your components
        {
          test: /\.css$/,
          loader: "style-loader!css-loader?modules"
        },
        {
          test: /\.(svg)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "img/"
              }
            }
          ]
        },
        {
          test: /\.(woff(2)?)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "fonts/"
              }
            }
          ]
        }
      ]
    }
  }
};
