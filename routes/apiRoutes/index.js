const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require ('fs')
let notes = require('../../db/db.json');

router.get('/notes', (req, res) => {
    res.json(notes)
});

router.post('/api/notes', (req, res) => {
    // Add new id using the uuid module
    req.body.id = uuidv4();

    notes.push(req.body)
    fs.writeFileSync('../../db/db.json', JSON.stringify(notes));
    res.json(notes)
});

//  ------ Delete note ------

router.delete("/api/notes/:id", (req, res) => {
    let id = req.params.id
    notes = notes.filter(n => {
        if (id === n.id) {
            return false
        } else {
            return true
        }
    })
    fs.writeFileSync('../../db/db.json', JSON.stringify(notes));
    res.json(notes)
});

module.exports = router;