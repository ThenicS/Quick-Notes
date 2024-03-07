import path from 'path';
import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
    dotenv.config({
        path: path.resolve(__dirname, '..', '..', '.env'),
    });
}

import express from 'express';
// import favicon from 'serve-favicon';
import logger from 'morgan';
import connectDB from './config/databse';
dotenv.config();
connectDB();

const app = express();

app.use(logger('dev'));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
// app.use(favicon(path.join(__dirname, '../../client/dist', 'favicon.ico')));

app.use(express.static(path.join(__dirname, '../../client/dist')));

// Middleware to check and verify a JWT and
// assign the user object from the JWT to req.user

app.get('/api/test', (req, res) => {
    res.json({ hello: 'There' });
});

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/dist', 'index.html'));
});

const port: string | number = process.env.PORT || 3001;

app.listen(port, function () {
    console.log(`Express app running on port ${port}`);
});
