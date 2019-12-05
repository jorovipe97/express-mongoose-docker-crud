const mongoose = require('mongoose');
const User = mongoose.model('User');

// https://github.com/madhums/node-express-mongoose-demo/blob/master/app/controllers/users.js
// https://github.com/madhums/node-express-mongoose-demo/blob/master/config/routes.js
module.exports.create = async function (req, res) {
    const user = new User(req.body);
    try {
        await user.save();
        console.log('user saved correctly');
        res.send('user created succesfully')
    } catch (err) {
        // call next()
        res.send(err);
    }
}