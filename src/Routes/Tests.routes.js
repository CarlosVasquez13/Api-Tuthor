import { Router } from "express";
import * as TestsController from '../Controllers/Tests.controller'

const router = Router()

router.get('/', TestsController.getUsersTest)

router.post('/', TestsController.createUserTest )

export default router;