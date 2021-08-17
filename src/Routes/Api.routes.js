var  express = require("express");
var TutorController = require('../Controllers/Tutor.controller')
var UserController = require('../Controllers/User.controller')
var ClassroomController = require('../Controllers/Classroom.controller')
var Paymencontroller = require('../Controllers/Payment.controller')

const router = express.Router()


//Rutas de tutores
router
	.get('/tutors', TutorController.getTutors)
	.post('/tutors/create', TutorController.createTutor );

router
	.get('/tutors/:_id', TutorController.getTutor);

//Rutas de usuarios
router
	.get('/users', UserController.getUsers)
	.post('/users/create', UserController.createUser );

router
	.get('/users/:_id', UserController.getUser);


//Rutas de pagos de tutorias
router
	.post('/create-payment', Paymencontroller.createPayment);
router
	.get('/execute-payment', Paymencontroller.executePayment);

//Rutas de las aulas de las de tutorias
router
	.get('/classrooms', ClassroomController.getClassrooms)
	.get('/classrooms/:_id', ClassroomController.getClassrooms)
	.post('/classrooms/create', ClassroomController.createClassroom )
	.put('/classrooms/:_id/register', ClassroomController.registerUser)
	.delete('/classrooms/:_id', ClassroomController.deleteClassroom);
	
module.exports = router;