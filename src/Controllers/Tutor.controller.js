"use strict";

var Tutor = require('../Database/Models/users/Tutor.model')

const  getTutors = async (req, res ) => {
    const tutors =  await Tutor.find()
    res.json(tutors)
}

const getTutor = async (req, res ) => {
    Tutor.findById(req.params._id)
     .populate('user', 'names')
     .populate('user', 'email').exec(function(err, tutor){
         if(err)
            res.send(err);
        res.json(tutor);
    });
}

const tutorClass = async (req, res) => {
    console.log(req);
    Tutor.updateOne(
        { _id: req.tutor },
        { $push: { classrooms: req._id } }
    );
}

const createTutor = async (req, res) => {
    const newTutor = new Tutor({
        names: req.body.names,
		phone: req.body.phone,
		email: req.body.email,
		title: req.body.title
    })
    const result = await newTutor.save();
    res.json(result)
}


module.exports = {
    getTutor, 
    getTutors,
    createTutor,
    tutorClass
}