const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')

const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
// const path = require('path');
// let notes = require('./db/db.json');
// const { v4: uuidv4 } = require('uuid');
// const fs = require ('fs')

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//  ------ HTML ROUTE ------

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/index.html'));
//   });
  
//   app.get('/notes', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/notes.html'));
//   });

//  ------ API ROUTE ------

// app.get('/api/notes', (req, res) => {
//     res.json(notes)
// });

// app.post('/api/notes', (req, res) => {
//     // Add new id using the uuid module
//     req.body.id = uuidv4();

//     notes.push(req.body)
//     fs.writeFileSync('./db/db.json', JSON.stringify(notes));
//     res.json(notes)
// });

//  ------ Delete note ------

// app.delete("/api/notes/:id", function(req, res) {
//     req.params.id
//     notes = notes.filter(n => {
//         if (req.params.id === n.id) {
//             return false
//         } else {
//             return true
//         }
//     })
//     fs.writeFileSync('./db/db.json', JSON.stringify(notes));
//     res.json(notes)
// });


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});