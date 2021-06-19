const { restart } = require("pm2");
const db = require("../models");
const Note = db.note;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.title) {
        restart.status(400).send({
            message: "Title field cannot be Null"
        });
        return;
    }
    const note = {
        title: req.body.title,
        description: req.body.description
    }
    Note.create(note)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            })
        })
};

exports.findAll = (req, res) => {
    Note.findAll()
        .then(data => {
            res.send(data)
        })
        .catch( err => {
            res.status(500).send({
                message: err.message
            })
        })
};

exports.findOne = (req, res) => {
    const id = req.params.id
    Note.findByPk(id)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving note with id=" + id
            })
        })
};


// Add update, delete and delete all later

// exports.update = (req, res) => {
  
// };


// exports.delete = (req, res) => {
  
// };


// exports.deleteAll = (req, res) => {
  
// };