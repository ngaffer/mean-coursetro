const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost/mean-coursetro');

// API/route files for interacting with MongoDB
const api = require('./server/routes/api'); // <-- change this into the app.js instead of just api????
const messageRoutes = require('./server/routes/messages');
const userRouts = require('./server/routes/user');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// API and route file locations - like the root for these types of requests
app.use('/message', messageRoutes);
app.use('/user', userRoutes)
app.use('/api', api); // <-- change this to generic app route

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));