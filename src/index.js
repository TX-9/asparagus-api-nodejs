const express = require('express');
require('./db/mongoose');
const userRouter = require('./router/user');
const planRouter = require('./router/mealPlan');

const app = express();
const port = process.env.PORT;

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
app.use(planRouter);

app.listen(port, () => {
    console.log('Server is up on port ' + port);
});

const MealPlan = require('./model/mealPlan');
const User = require('./model/user');
const main = async () => {
    // const plan = await MealPlan.findById('5ce3144827622c4c9ca369d4');
    // await plan.populate('owner').execPopulate();
    // console.log(plan.owner);

    // const user = await User.findById('5ce3137d891f0f57ac62cddc');
    // await user.populate('plans').execPopulate();
    // console.log(user.plans);
}

main();
// const myFunction = async () => {
//     const token = jwt.sign({ _id: '1234567'}, 'jwttesting', { expiresIn: '5 days'});
//     console.log(token);

//     const data = jwt.verify(token, 'jwttesting');
//     console.log(data);
// }

// myFunction();


// send method, res.send({user}), implicitly call toJSON()  
// const pet = {
//     name: 'Pet'
// }

// pet.toJSON = function() {
//     console.log(this);
//     return {};
// }
// console.log(JSON.stringify(pet));