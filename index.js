const express = require('express');
const app = express();
const mongoose = require('mongoose');
const debug = require('debug')('app:debug');
const config = require('config');

const connectionurl = require('./db-config');

const PORT = process.env.PORT || 3000;

mongoose.connect(connectionurl())
    .then(() => { 
        if(app.get('env') === 'development'){
            debug('Connected to mongodb...');
        }
    });

app.listen(PORT, () => {
    if(app.get('env') === 'development') {
        debug(`Application initiated at ${PORT}`)
    }
});