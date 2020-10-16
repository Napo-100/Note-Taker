const router = require('express').Router();
const notes = require('../../db/db.json');
const { v4: uuidv4 } = require('uuid');
const fs = require ('fs')

router.get('/api/notes', (req, res) => {
    console.log(notes)
    res.json(notes)
});

router.post('/api/notes', (req, res) => {
    console.log(req.body)
    // This modules will add in new id to the req.body using the uuid module
    req.body.id = uuidv4();

    // Push back in the information logged in back into the notes array
    // Then send back response in JSON format
    notes.push(req.body)
    // Would normally use writeFile for asynchronous functionality but for simplicity sake for a small project like this it will do.
    fs.writeFileSync('../../db/db.json', JSON.stringify(notes));
    res.json(notes)
});

router.delete("/api/notes/:id", function(req, res) {
    req.params.id
    notes = notes.filter(n => {
        if (req.params.id === n.id) {
            return false
        } else {
            return true
        }
    })
    fs.writeFileSync('../../db/db.json', JSON.stringify(notes));
    res.json(notes)
});

module.exports = router;