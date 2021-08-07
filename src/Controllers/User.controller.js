"use strict";

import User from '../Database/Models/users/User.model'
import Tutor from '../Database/Models/users/Tutor.model'
import jsonResult from '../Helpers/Result'

export const getUsers = async (req, res ) => {
    const users =  await User.find()
    res.json(users)
}

export const getUser = async (req, res ) => {
    const user =  await Tutor.findById(req.user._id, '')
    res.json(user)
}

export const createUser = async (req, res) => {
    let result = new jsonResult(true, false, null, '')

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