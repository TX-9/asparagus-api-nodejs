const express = require('express');
const cors = require('cors');
require('./db/mongoose');
const homeRouter = require('./router/home');
const userRouter = require('./router/user');
const planRouter = require('./router/schedule');

const app = express();
app.use(cors());
app.use(express.json());
app.use(homeRouter);
app.use(userRouter);
app.use(planRouter);

module.exports = app;