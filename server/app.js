var express = require('express');
var cors = require('cors')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var projectsRouter = require('./routes/projects');
var notesRouter = require('./routes/notes');
var clientsRouter = require('./routes/clients')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/notes', notesRouter);
app.use('/projects', projectsRouter);
app.use('/clients', clientsRouter);
app.set('port', process.env.PORT || 8080);
// app.use('/users', usersRouter);



module.exports = app;
