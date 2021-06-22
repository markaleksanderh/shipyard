const { restart } = require("pm2");
const { project } = require("../models");
const db = require("../models");
const Company = db.company;
const Op = db.Sequelize.Op;


// Create
// Read One
// Read All
// Update
// Delete One
// Delete All

exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "Name field cannot be Null"
        });
        return;
    }
    const company = {
        name: req.body.name,
    }
    Company.create(company)
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
    Company.findAll({
        include: [{
            model: project,
            as: 'projects'
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
    Company.findByPk(id)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving company with id=" + id
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