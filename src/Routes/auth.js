var express = require("express");
var bycrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var User = require('../Database/Models/users/User.model');
var UserController = require('../Controllers/User.controller');


const router = express.Router();

router.post('/register', UserController.createUser);
router.post('/login', async (req, res) => {
	
	//validaciones
	const user = await User.findOne({ email: req.body.email }).exec();
	if(!user) 
		return res.status(400).json({ error: ' Usuario o contrasena erronea'});
	
	const validPassword = await bycrypt.compare(req.body.password, user.pass);
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