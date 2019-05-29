const express = require('express');
require('./db/mongoose');
const homeRouter = require('./router/home');
const userRouter = require('./router/user');
const planRouter = require('./router/mealPlan');

const app = express();
app.use(express.json());
app.use(homeRouter);
app.use(userRouter);
app.use(planRouter);

module.exports = app;