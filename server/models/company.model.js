module.exports = (sequelize, Sequelize) => {
    const Company = sequelize.define('Company', {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
    });
    return Company;
}
