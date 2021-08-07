import { Router } from "express";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../Database/Models/users/User.model'
import * as UserController from '../Controllers/User.controller'


const router = Router();

router.post('/register', UserController.createUser);
router.post('/login', async (req, res) => {
	
	//validaciones
	const user = await User.findOne({ email: req.body.email }).exec();
	if(!user) 
		return res.status(400).json({ error: ' Usuario o contrasena erronea'});
	
	const validPassword = await bcrypt.compare(req.body.password, user.pass);
	if(!validPassword) 
		return res.status(400).json({ error: ' Usuario o contrasena erronea'});
	
	//res.json({
    //    error: null,
    //    data: 'exito bienvenido'
    //})
	
	const token = jwt.sign({
		name: user.name,
		id: user._id
	}, process.env.TOKEN_SECRET)
	
	res.header('auth-token', token).json({
        error: null,
        data: {token}
    })
});

module.exports = router;