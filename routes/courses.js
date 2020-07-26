const express = require('express');
const router = express.Router();
const debug = require('debug')('app:debug');

const {Course, validate} = require('../models/courses');

router.get('/', async (req,res) => {

    const courses = await Course.find();
    res.send(courses);

});

router.post('/', async (req, res) => {

    const { error } = validate(req.body);

    
    if(error) return res.status(400).send(error.details);

    let course = new Course({
        name:req.body.name,
        author: req.body.author,
        tags:req.body.tags,
        isPublished:req.body.isPublished
    });

    course = await course.save();
    
    res.send(course);


});


module.exports = router;