const User = require ('../models/user');

module.exports = {
    signup
};

async function signup(req, res) {
    const user = new User(req.body); 
    try {
        await user.save();
        // we need to send back a json web token instead of the user here
        res.json(user)
    } catch (err) {
        // if duplicate email
        res.status(400).json(err);
    }
}

