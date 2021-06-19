const project = require("../controllers/project.controller.js")
var express = require('express')
var router = express.Router()

router.get("/", project.findAll);
router.get("/:id", project.findOne);
router.post("/", project.create);

module.exports = router

