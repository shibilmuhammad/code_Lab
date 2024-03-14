const express = require('express');
const router = express.Router()
const projectController = require('../controller/user/projectController')
router.post('/addProject',projectController.addProject)
router.get('/getlatest',projectController.getLatestList)
router.get('/getdevelopers',projectController.getTopDevelopers)
router.get('/getpopular',projectController.getPopularList)
router.get('/getallcategories',projectController.getCategoryList)
router.get('/description/:id',projectController.getDescription)
module.exports = router