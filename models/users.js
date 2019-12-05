// Using Node.js `require()`
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Defining a Model
// custom validators
// https://github.com/madhums/node-express-mongoose-demo/blob/master/app/models/user.js
const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, {
    // change collection name
    // https://stackoverflow.com/questions/54878935/how-to-change-collection-name-in-mongoose-model
    collection: 'theusers'
});


mongoose.model('User', UserSchema);