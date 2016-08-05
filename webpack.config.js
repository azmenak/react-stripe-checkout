module.exports = {
  entry: './StripeCheckout.js',
  output: {
    path: './dist',
    filename: 'main.js',
  },
  module: {
    loaders: [
      {
        test: /.jsx?/,
        loader: 'babel',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
  },
};
