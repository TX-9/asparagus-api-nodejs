const jwt = require('jsonwebtoken');
const User = require('../model/user');


const auth = async (req, res, next) => {
    try {
        // bypass auth for testing  
        const user = await User.findOne({ _id: "5d27df28602f3b3d609af987"});
        if(!user) {
            throw new Error();
        }
        req.user = user;
        next();

        // const token = req.header('Authorization').replace('Bearer','').trim();
        // const decoded = jwt.verify(token, process.env.JWT_SECRET)
        // const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });

        // if(!user) {
        //     throw new Error();
        // }

        // req.token = token;
        // req.user = user;
        // next();
        //console.log('user:' + user);
    } catch (e) {
        res.status(401).send({error: 'Please authenticate'})
    }
    
}

module.exports = auth;