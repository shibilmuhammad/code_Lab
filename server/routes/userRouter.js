const express = require('express');
const router = express.Router()
const projectController = require('../controller/user/projectController')
const userController = require('../controller/user/userController')
router.post('/addProject',projectController.addProject)
router.get('/getlatest',projectController.getLatestList)
// router.get('/getdevelopers',projectController.getTopDevelopers)
router.get('/getpopular',projectController.getPopularList)
router.get('/getallcategories',projectController.getAllCategories)
router.get('/description/:id',projectController.getDescription)
router.post('/signup',userController.signUp)
router.post('/login',userController.login)
router.get('/getdevelopers',userController.getDevelopers)
router.get('/developer/:publisher_id',userController.getDeveloperDetails)
router.get('/profile',userController.getProfile)
router.post('/editprofile',userController.editProfile)
router.get('/myprojects',userController.getMyProjects)
router.get('/editproject/:id',projectController.getEditProject)
router.post('/editproject',projectController.postEditproject);
router.get('/getprojectsbydomain/:domainName',projectController.getProjectsByDomain);
router.get('/search/:searchValue',projectController.getSearch);
router.post('/getfavorite',projectController.getFavorites)

module.exports = router