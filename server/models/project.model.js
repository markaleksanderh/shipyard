module.exports = (sequelize, Sequelize) => {
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
    return Project;
}
