const express = require('express');
const path = require('path');
const app = express();

const ServerRendererPath = path.join(__dirname, './dist/server.js');
const ServerRenderer = require(ServerRendererPath).default;

app.use('/dist', express.static(path.join(__dirname, './dist')));

app.use(ServerRenderer({}));

app.listen(8080);