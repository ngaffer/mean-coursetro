const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const mongoose = require('mongoose');
const app = express();

// stores files paths for routes - files interact with MongoDb
const api = require('./server/routes/api');
// const appRoutes = require('/server/routes/app');
// const messageRoutes = require('./server/routes/messages');
// const userRoutes = require('./server/routes/user');

// Connect to mongodb database with specific db name using mongoose
mongoose.connect('mongodb://localhost/mean-coursetro');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// pairs file path (stored in a var) with route paths
// app.use('/message', messageRoutes);
// app.use('/user', userRoutes)
app.use('/api', api); 
// app.use('/', appRoutes);

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));