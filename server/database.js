const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_SCHEMA || 'postgres',
                                process.env.DB_USER || 'postgres',
                                process.env.DB_PASSWORD || '',
                                {
                                    host: process.env.DB_HOST || 'localhost',
                                    port: process.env.DB_PORT || 5432,
                                    dialect: 'postgres',
                                    dialectOptions: {
                                        ssl: process.env.DB_SSL == "true"
                                    }
                                });


const Project = sequelize.define('Project', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    },
    start_date: {
        type: Sequelize.DATE,
        allowNull: true
    },
    end_date: {
        type: Sequelize.DATE,
        allowNull: true
    }
});

const Note = sequelize.define('Note', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    },
});

const Client = sequelize.define('Client', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

// Relations
// Project.hasMany(Note);
// Note.belongsTo(Project);
// Client.hasMany(Project);
// Project.belongsTo(Client);


module.exports = {
    sequelize: sequelize,
    Note: Note,
    Project: Project,
    Client: Client
};