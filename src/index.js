const express = require('express');
require('./db/mongoose');
const userRouter = require('./router/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || 3000;

// middleware: new request -> do something -> run route handler
// app.use((req, res, next) => {
//    if(req.method === 'GET') {
//        res.send('GET req is not allowed');
//    } else {
//        next();    
//    }
// });

// app.use((req, res, next) => {
//     res.status(503).send('Service is currently down. Try later');
// });

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

