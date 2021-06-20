const { restart } = require("pm2");
const { note } = require("../models");
const db = require("../models");
const Project = db.project;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.title) {
        restart.status(400).send({
            message: "Title field cannot be Null"
        });
        return;
    }
    const project = {
        title: req.body.title,
        description: req.body.description,
        start_date: req.body.start_date,
        end_date: req.body.end_date
    }
    Project.create(project)
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
    Project.findAll({
        include: [{
            model: note,
            as: 'notes'
        }]
    })
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
    Project.findByPk(id)
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