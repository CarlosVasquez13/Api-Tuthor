var  express = require("express");
var TutorController = require('../Controllers/Tutor.controller')
var UserController = require('../Controllers/User.controller')
var ClassroomController = require('../Controllers/Classroom.controller')

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

router
	.get('/classrooms', ClassroomController.getClassrooms)
	.get('/classrooms/:_id', ClassroomController.getClassrooms)
	.post('/classrooms/create', ClassroomController.createClassroom )
	.put('/classrooms/:_id/register', ClassroomController.registerUser)
	.delete('/classrooms/:_id', ClassroomController.deleteClassroom);
	
module.exports = router;