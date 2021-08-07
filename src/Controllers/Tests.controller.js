var UserTest = require('../Database/Models/UserTest.model')
var jsonResult = require('../Helpers/Result')
var userModel = require('../Database/Models/users/User.model')
var tutorModel = require('../Database/Models/users/Tutor.model')

const getUsersTest = async (req, res ) => {
    const usersTests =  await tutorModel.find().populate('user')
    .exec();
    let result = new jsonResult(true, false, usersTests, 'Test message .')
    res.json(result)
}

const createUserTest = async (req, res) => {
    const newUser = new UserTest({
        names: req.body.name,
        age: req.body.age
    })
    const result = await newUser.save();
    res.json(result)
}

module.exports = {
    getUsersTest, 
    createUserTest
}