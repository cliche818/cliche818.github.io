module.exports = {
    entry: "./webpack/entry.js",
    output: {
      // we’re going to put the generated file in the assets folder so jekyll will grab it.
      // if using GitHub Pages, use the following:
      // path: "assets/javascripts"
      path: __dirname + "/assets",
      filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader"
            }
        ]
    }
  };