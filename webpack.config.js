const config = {
  entry: './src/aap.js',
  output: {
    filename: bundle.js,
    path: path_resolve(__dirname, 'dist')
  }
};

modules.export = config;
