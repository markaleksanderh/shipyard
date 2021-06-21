module.exports = (sequelize, Sequelize) => {
    const Company = sequelize.define('company', {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
    });
    return Company;
}
