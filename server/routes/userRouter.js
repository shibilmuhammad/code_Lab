const express = require('express');
const router = express.Router()
const projectController = require('../controller/user/projectController')
router.post('/addProject',projectController.addProject)
module.exports = router