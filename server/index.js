const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();

const env = process.env.NODE_ENV || 'development';
const isDevMode = env.toLowerCase() !== 'production';

app.set('views', `${__dirname}`);
app.set('view engine', 'pug');

if (isDevMode) {
  const compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath,
  }));
  app.use(webpackHotMiddleware(compiler));
  app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });
} else {
  /* Case PRODUCTION mode */
  app.use(express.static(webpackConfig.settings.distPath));
}

// handle every other route with index.html, which will contain
// a script tag to our application's JavaScript file(s).
app.get('*', (request, response) => {
  response.render('index');
});

// listen on port 3000
app.listen(process.env.PORT || 3000, () => {
  console.log("Rockin' out on port 3000 homie");
});
