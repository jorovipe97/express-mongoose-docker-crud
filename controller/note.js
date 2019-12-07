const mongoose = require('mongoose');
const Note = mongoose.model('Note');

// these controller are being used on routes/notes.js
// I'm using name in function to ease debug
module.exports.create = async function create(req, res, next) {
    const userInfo = req.userInfo;
    const date = new Date();
    const noteObj = {
        user_owner: userInfo.userId,
        text: req.body.text,
        created_on: date,
        last_edit: date
    }
    // console.log(req.body);
    // console.log(JSON.stringify(noteObj, undefined, 2));
    const note = new Note(noteObj);
    try {
        await note.save();
        console.log('note created correctly');
        const status = 'succesfull!'
        res.json({status});
    } catch (err) {
        res.json(err);
    }
};

module.exports.listNotes = async function listNotes(req, res, next) {
    const userInfo = req.userInfo;
    const criteria = { user_owner: userInfo.userId };
    // GET /notes/?last
    const onlyLastXNotes = +req.query.last;
    const order = req.query.order;
    try {
        let resNotes = [];
        if (order === 'older') {
            // Remember that queries are not primises,
            // to get promises use the exec() method.
            // https://mongoosejs.com/docs/promises.html#queries-are-not-promises
            resNotes = await Note.find(criteria).sort({created_on: 'asc'}).exec();
        } else if (order === 'lastedit') {
            resNotes = await Note.find(criteria).sort({last_edit: 'desc'}).exec();
        } else { // order: newer or undefined or any other value
            resNotes = await Note.find(criteria).sort({created_on: 'desc'}).exec();
        }
        console.log(JSON.stringify(resNotes, null, 2));

        if (req.query.last) {
            // take into account that in slice last is not taken
            const endIndex = Math.max(0, Math.min(resNotes.length, onlyLastXNotes));
            resNotes = resNotes.slice(0, endIndex);
        }
        res.json(resNotes);
    } catch (err) {
        res.status(422).json({
            error: 'Could not get the user notes.'
        });
    }
};

module.exports.update = async function update(req, res, next) {
    const userInfo = req.userInfo;
    try {
        // I could have use app.param('id', callback)
        // to make some validations
        // but i'm lazy at this moment.
        if (req.body.text && req.params.id) {
            const id = mongoose.Types.ObjectId(req.params.id);
            const note = await Note.findById(id).exec();
            note.text = req.body.text;
            note.last_edit = new Date();
            if (!note) {
                const message = 'Note not found.';
                res.json({
                    message
                });
                return;
            }
            await note.save();
            const message = 'Note updated succesfully.';
            res.json({
                message
            });
        } else {
            const message = 'Note wasn\'t updated correctly.';
            res.json({
                message
            });
        }
    } catch (err) {
        res.status(422).json({
            error: 'Could not update the user note.'
        });
    }
};

module.exports.deleteNote = async function deleteNote(req, res, next) {
    try {
        if (req.params.id) {
            const id = mongoose.Types.ObjectId(req.params.id);
            await Note.findOneAndDelete({
                _id: id
            }).exec();
            const message = 'Note succesfully deleted.';
            res.json({
                message
            });
        } else {
            const message = 'Note wasn\'t deleted.';
            res.json({
                message
            });
        }
    } catch (err) {
        res.status(422).json({
            error: "Could not delete the user note."
        });
    }
}