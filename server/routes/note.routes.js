const note = require("../controllers/note.controller.js")
var express = require('express')
var router = express.Router()

router.get("/", note.findAll);
router.get("/:id", note.findOne);
router.post("/", note.create);

module.exports = router

