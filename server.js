// const apiRoutes = require('./routes/apiRoutes/index');
// const htmlRoutes = require('./routes/htmlRoutes/index');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const path = require('path');
const notes = require('./db/db.json');
const { v4: uuidv4 } = require('uuid');
const fs = require ('fs')

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.use(express.static('public'));

// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);

//  HTML ROUTE ------------

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });
  
  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
  });




app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});