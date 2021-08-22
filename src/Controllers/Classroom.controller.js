"use strict";

var Classroom = require('../Database/Models/classrooms/Classroom.model')
var TutorController = require('../Controllers/Tutor.controller')



const  getClassrooms = async (req, res ) => {
    const classrooms =  await Classroom.find()
    .populate('tutor', 'names')
    .exec(function(err, classroom){
        if(err)
           res.send(err);
       res.json(classroom);
   });
    // res.json(classrooms)
}

const getClassroom = async (req, res ) => {
    Classroom.findById(req.params._id)
     .populate('tutor', 'names')
     .populate('users.user', 'names').exec(function(err, classroom){
         if(err)
            res.send(err);
        res.json(classroom);
    });
}

const registerUser = async (req, res) => {
    Classroom.updateOne(
        { _id: req.body._id },
        { $push: { users: req.body.user_id }},
        function(err, result) {
            if(err){
                res.send(err);
            }else{
                res.send(result);
            }
        }
    );
}

const deleteClassroom = async (req, res) => {
    Classroom.findById(req.params._id).deleteOne().exec();
}

const createClassroom = async (req, res) => {

    const newClassroom = new Classroom({
        name: req.body.name,
		description: req.body.description,
		tag: req.body.tag,
        tutor: req.user.id,
        class_time: req.body.class_time,
		hours: req.body.hours,
        zoom_class: req.body.zoom_class
    })
    console.info('newClassroom', newClassroom);
    
    const result = await newClassroom.save();
    TutorController.tutorClass(result);
    res.json(result)
}


module.exports = {
    getClassrooms, 
    getClassroom,
    createClassroom,
    registerUser,
    deleteClassroom
}