import { Router } from "express";
import UserTest from '../Database/Models/UserTest'

const router = Router()

router.get('/test', (req, res) => {
 
    const newUser = new UserTest({
        names: "usert test",
        age: 22
    })
   
    newUser.save()
    res.send('test')
})

export default router;