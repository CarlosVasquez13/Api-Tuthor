var  express = require("express");
var TutorController = require('../Controllers/Tutor.controller')
var UserController = require('../Controllers/User.controller')

const router = express.Router()

router
	.get('/tutors', TutorController.getTutors)
	.post('/tutors/create', TutorController.createTutor );

router
	.get('/tutors/:_id', TutorController.getTutor);

router
	.get('/users', UserController.getUsers)
	.post('/users/create', UserController.createUser );

router
	.get('/users/:_id', UserController.getUser);
	
module.exports = router;