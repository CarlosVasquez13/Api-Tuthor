"use strict";

import User from '../Database/Models/users/User.model'

export const getUsers = async (req, res ) => {
    const users =  await User.find()
    res.json(users)
}

export const getUser = async (req, res ) => {
    const user =  await Tutor.findById(req.user._id, '')
    res.json(user)
}

export const createUser = async (req, res) => {
    const newUser = new User({
        names: req.body.names,
		phone: req.body.phone,
		email: req.body.email
    })
    const result = await newUser.save();
    res.json(result)
}