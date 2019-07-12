const app = require('./app');

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


app.listen(port, () => {
    console.log('Server is up on port ' + port);
});

const Schedule = require('./model/schedule');
const User = require('./model/user');
const main = async () => {
    // const plan = await Schedule.findById('5ce3144827622c4c9ca369d4');
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