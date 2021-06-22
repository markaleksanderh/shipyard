var express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const db = require("./models");
const Role = db.role;

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
  initial()
});

function initial() {
    Role.create({
      id: 1,
      name: "user"
    });
   
    Role.create({
      id: 2,
      name: "moderator"
    });
   
    Role.create({
      id: 3,
      name: "admin"
    });
  }

var app = express();

app.use(cors())
app.options('*', cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

var indexRouter = require('./routes/index')
var noteRouter = require('./routes/note.routes')
var companyRouter = require('./routes/company.routes')
var projectRouter = require('./routes/project.routes')
var authRouter = require('./routes/auth.routes')
var userRouter = require('./routes/user.routes')

app.use('/', indexRouter);
app.use('/auth', authRouter)
app.use('/user', userRouter)
app.use('/notes', noteRouter);
app.use('/companies', companyRouter)
app.use('/projects', projectRouter)

module.exports = app;
