const company = require("../controllers/company.controller.js")
var express = require('express')
var router = express.Router()

router.get("/", company.findAll);
router.get("/:id", company.findOne);
router.post("/", company.create);

module.exports = router

