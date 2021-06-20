// const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB_SCHEMA || 'postgres',
  process.env.DB_USER || 'postgres',
  process.env.DB_PASSWORD || '',
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    dialectOptions: {
      ssl: process.env.DB_SSL == "true"
    }
  }
  // dbConfig.DB,
  // dbConfig.USER,
  // dbConfig.PASSWORD,
  // {
  //   host: dbConfig.HOST,
  //   dialect: dbConfig.dialect,
  //   operatorsAliases: false,
  //   pool: {
  //     max: dbConfig.pool.max,
  //     min: dbConfig.pool.min,
  //     acquire: dbConfig.pool.acquire,
  //     idle: dbConfig.pool.idle
  //   }
  // }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.note = require("./note.model.js")(sequelize, Sequelize);
db.company = require("./company.model.js")(sequelize, Sequelize)
db.project = require("./project.model.js")(sequelize, Sequelize)

db.project.hasMany(db.note, { as: "notes" });
db.note.belongsTo(db.project, {
  foreignKey: "projectId",
  as: "project",
});

module.exports = db;