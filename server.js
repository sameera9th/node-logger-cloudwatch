const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const routes = require('./routes/v1');
const CONFIG = require('./config/config');
var cors = require('cors');

var app = express();
app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api/v1/post',routes);

let server = app.listen(CONFIG.port);
console.log("Server is running on : "+CONFIG.port);
server.timeout = Number(CONFIG.time_out);
module.exports = app;