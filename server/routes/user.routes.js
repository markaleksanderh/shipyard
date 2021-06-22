const { authJwt } = require("../middleware");
const user = require('../controllers/user.controller.js')
var express = require('express')
var router = express.Router()

router.get('/all', user.allAccess)
router.get('/user', [authJwt.verifyToken],user.userBoard)
router.get('/mod', [authJwt.verifyToken, authJwt.isModerator], user.moderatorBoard)
router.get('/admin', [authJwt.verifyToken, authJwt.isAdmin], user.adminBoard)

module.exports = router