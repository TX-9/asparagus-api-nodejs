const express = require('express');
require('./db/mongoose');
const userRouter = require('./router/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);

app.listen(port, () => {
    console.log('Server is up on port ' + port);
});

const myFunction = async () => {
    const token = jwt.sign({ _id: '1234567'}, 'jwttesting', { expiresIn: '5 days'});
    console.log(token);

    const data = jwt.verify(token, 'jwttesting');
    console.log(data);
}

myFunction();

