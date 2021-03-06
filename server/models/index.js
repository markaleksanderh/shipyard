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
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.note = require("./note.model.js")(sequelize, Sequelize);
db.company = require("./company.model.js")(sequelize, Sequelize)
db.project = require("./project.model.js")(sequelize, Sequelize)
db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);


db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.ROLES = ["user", "admin", "moderator"];

db.company.hasMany(db.project, { as: "projects"})
db.project.belongsTo(db.company, {
  // foreignKey: "companyId",
  as: "company",
  allowNull: false
})

db.project.hasMany(db.note, { as: "notes" });
db.note.belongsTo(db.project, {
  foreignKey: {
    // foreignKey: "projectId",
    as: "note",
    allowNull: false
  }
});

module.exports = db;