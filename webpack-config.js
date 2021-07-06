import webpack from "webpack"
require("dotenv").config()

/* 
Authors: CruzHacks 2021 Engineers
*/
module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        REACT_APP_EXAMPLE: JSON.stringify(process.env.REACT_APP_EXAMPLE),
      },
    }),
  ],
}
