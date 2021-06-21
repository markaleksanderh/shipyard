var express = require('express');
var cors = require('cors')
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const db = require("./models");
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});



var app = express();
app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


var indexRouter = require('./routes/index');
var noteRouter = require('./routes/note.routes');
var companyRouter = require('./routes/company.routes')
var projectRouter = require('./routes/project.routes')

app.use('/', indexRouter);
app.use('/notes', noteRouter);
app.use('/companies', companyRouter)
app.use('/projects', projectRouter)


module.exports = app;
