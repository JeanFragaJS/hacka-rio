const {Router} = require('express')
const UserController = require('./controllers.js')
const{ cloudinaryStorage, multerStorage } = require('./config/uploads.js')
const multer = require('multer')

let storage = multerStorage;
const  router = Router()
const uploads = multer({storage}).fields([{name: 'images', maxCount: 6}])

//router.post('/user/:clientId/pets', uploads, PetsController.create)
router.post('/user', uploads, UserController.create)
// router.get('/pets', PetsController.show)





module.exports = router 