const router = require('express').Router();
const { createNewNote, getNote, deleteNote } = require('../../lib/notes')
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
    const note = getNote( req.body, notes);
    res.json(note)
})

router.post('/notes', (req, res) => {
    const note = createNewNote( req.body, notes);
    res.json(note);
})

module.exports = router;