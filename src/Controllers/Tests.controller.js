import UserTest from '../Database/Models/UserTest.model'

export const getUsersTest = async (req, res ) => {
    const usersTests =  await UserTest.find()
    res.json(usersTests)
}

export const createUserTest = async (req, res) => {
    const newUser = new UserTest({
        names: req.body.name,
        age: req.body.age
    })
    const result = await newUser.save();
    res.json(result)
}