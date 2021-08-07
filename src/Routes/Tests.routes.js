var express = require("express");
var TestsController = require('../Controllers/Tests.controller')
var TutorController = require('../Controllers/Tutor.controller')

const router = express.Router()

router.get('/', TestsController.getUsersTest)

router.post('/', TestsController.createUserTest )

module.exports = router;