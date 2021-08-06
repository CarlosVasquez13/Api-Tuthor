import UserTest from '../Database/Models/UserTest.model'
import jsonResult from '../Helpers/Result'

export const getUsersTest = async (req, res ) => {
    const usersTests =  await UserTest.find()
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