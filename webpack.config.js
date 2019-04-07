var path = require("path");

module.exports = {
  entry: "./scss/index.scss",
  output: {
    path: path.resolve(__dirname, "docs/dist/css"),
    filename: "bundle.css"
  },
  module: {
    rules: [
      {
        test: /\.s(a|c)ss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  }
};