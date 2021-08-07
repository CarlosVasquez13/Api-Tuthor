"use strict";

var Tutor = require('../Database/Models/users/Tutor.model')

const  getTutors = async (req, res ) => {
    const tutors =  await Tutor.find()
    res.json(tutors)
}

const getTutor = async (req, res ) => {
    const tutor =  await Tutor.findById(req.tutor._id, '')
    res.json(tutor)
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
    createTutor
}