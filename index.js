const express = require('express');
const app = express();
const mongoose = require('mongoose');
const debug = require('debug')('app:debug');
const config = require('config');

const courses = require('./routes/courses'); 
const connectionurl = require('./db-config');

const PORT = process.env.PORT || 3000;

mongoose.connect(connectionurl())
    .then(() => { 
        if(app.get('env') === 'development'){
            debug('Connected to mongodb...');
        }
    })
    .catch(() => {
        debug('not connected...');
    });
    

app.use(express.json());
app.use('/api/courses', courses);

app.listen(PORT, () => {
    if(app.get('env') === 'development') {
        debug(`Application initiated at ${PORT}`)
    }
});

