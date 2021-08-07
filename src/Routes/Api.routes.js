import { Router } from "express";
import * as TutorController from '../Controllers/Tutor.controller'
import * as UserController from '../Controllers/User.controller'

const router = Router()

router
	.get('/tutors', TutorController.getTutors)
	.post('/tutors/create', TutorController.createTutor );

router
	.get('/users', UserController.getUsers)
	.post('/users/create', UserController.createUser );

export default router;