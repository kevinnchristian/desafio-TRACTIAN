const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const createError = require('http-errors');
const cors = require('cors');
require("dotenv").config();
const database = require('./database');

const indexRouter = require('./routes');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  '/image',
  express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
);

app.use('/', indexRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (error, req, res, next) {
    res.status(error.status || 500).json({
      "error": true,
      "status": error.status,
      "msg": error.message,
    });
});

module.exports = app;