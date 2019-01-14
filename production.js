const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const app = express();

const ServerRendererPath = path.join(__dirname, './dist/server.js');
const ServerRenderer = require(ServerRendererPath).default;

require('dotenv').config();

app.get('/robots.txt', function (req, res) {
  res.type('text/plain');
  res.send("User-agent: *\nDisallow: /");
});
app.use(favicon(path.join(__dirname, 'favicon.ico')));

app.use('/dist', express.static(path.join(__dirname, './dist')));

app.use(ServerRenderer({}));

app.listen(8080);