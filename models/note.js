const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Defining a Model
// custom validators
// https://github.com/madhums/node-express-mongoose-demo/blob/master/app/models/user.js
const NoteSchema = new Schema({
    // User id who owns this note
    user_owner: {
        type: String,
        required: true
    },
    // text related to the user id
    text: {
        type: String,
        required: true
    },
    created_on: {
        type: Date,
        required: true
    },
    last_edit: {
        type: Date,
        required: true
    }
}, {
    // change collection name
    // https://stackoverflow.com/questions/54878935/how-to-change-collection-name-in-mongoose-model
    collection: 'notes'
});


mongoose.model('Note', NoteSchema);