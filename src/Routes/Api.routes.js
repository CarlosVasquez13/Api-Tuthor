var  express = require("express");
var TutorController = require('../Controllers/Tutor.controller')
var UserController = require('../Controllers/User.controller')

const router = express.Router()

router
	.get('/tutors', TutorController.getTutors)
	.post('/tutors/create', TutorController.createTutor );

router
	.get('/users', UserController.getUsers)
	.post('/users/create', UserController.createUser );

module.exports = router;