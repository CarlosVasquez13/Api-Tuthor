import UserTest from '../Database/Models/UserTest.model'
import jsonResult from '../Helpers/Result'
import userModel from '../Database/Models/users/User.model'
import tutorModel from '../Database/Models/users/Tutor.model'

export const getUsersTest = async (req, res ) => {
    const usersTests =  await tutorModel.find().populate('user')
    .exec();
    let result = new jsonResult(true, false, usersTests, 'Test message .')
    res.json(result)
}

export const createUserTest = async (req, res) => {
    const newUser = new UserTest({
        names: req.body.name,
        age: req.body.age
    })
    const result = await newUser.save();
    res.json(result)
}