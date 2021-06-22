const { verifySignUp } = require("../middleware");
const auth = require("../controllers/auth.controller");
var express = require('express')
var router = express.Router()

router.post('/signup', [verifySignUp.checkDuplicateUsernameOrEmail, verifySignUp.checkRolesExisted], auth.signup)
router.post('/signin', auth.signin)

module.exports = router