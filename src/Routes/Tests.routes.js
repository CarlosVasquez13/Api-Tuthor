import { Router } from "express";
import * as TestsController from '../Controllers/Tests.controller'
import * as TutorController from '../Controllers/Tutor.controller'

const router = Router()

router.get('/', TestsController.getUsersTest)

router.post('/', TestsController.createUserTest )

export default router;