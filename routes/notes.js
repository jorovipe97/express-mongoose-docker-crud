const checkIfAuthenticated = require('../middledwares/auth-middledware');
const express = require('express');
const router = express.Router();
const notes = require('../controller/note');

/**
 *  GET notes.
 */
router.get('/', checkIfAuthenticated, notes.listNotes);

/** 
 * creates a new note
 */
router.post('/new', checkIfAuthenticated, notes.create);

/**
 * updates a given note
 */
router.post('/note/:id', checkIfAuthenticated, notes.update);

/**
 * delete a given user note
 */
router.delete('/note/:id', checkIfAuthenticated, notes.deleteNote);

module.exports = router;