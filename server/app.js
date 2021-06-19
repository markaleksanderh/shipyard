var express = require('express');
var cors = require('cors')
// var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


const db = require("./models");
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});


var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// var projectsRouter = require('./routes/projects');
var noteRouter = require('./routes/note.routes');
var companyRouter = require('./routes/company.routes')

var app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(cors())

app.use(cors(), function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/notes', noteRouter);
app.use('/companies', companyRouter)
// app.use('/projects', projectsRouter);
// app.use('/clients', clientsRouter);
// app.set('port', process.env.PORT || 8080);
// app.use('/users', usersRouter);



module.exports = app;
