"use strict";

var User = require('../Database/Models/users/User.model')
var Tutor = require('../Database/Models/users/Tutor.model')
var jsonResult = require('../Helpers/Result')
var bcrypt = require('bcrypt')

const getUsers = async (req, res ) => {
    const users =  await User.find()
    res.json(users)
}

const getUser = async (req, res ) => {
    const user =  await Tutor.findById(req.user._id, '')
    res.json(user)
}

const createUser = async (req, res) => {
    let result = new jsonResult(true, false, null, '')
	
	// hash contraseña
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
	
	const newUser = new User({
        names: req.body.names,
		phone: req.body.phone,
		email: req.body.email,
        pass: req.body.password,
        tutor: req.body.isTutor,
        dni: req.body.dni
    })
    newUser.save()
    .then( async (response) => {
        result.data  = response;
        result.message = "Usuario creado."
        if (response.tutor === 1) {
            let newTutor = new Tutor({
                user: response._id,
                title: req.body.tutor.title,
                classrooms: []
            })
            const tutorResult = await newTutor.save()
        }
        res.json(result)
    })
}

module.exports = {
    getUsers,
    getUser,
    createUser
}