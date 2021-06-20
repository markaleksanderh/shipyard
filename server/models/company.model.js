module.exports = (sequelize, Sequelize) => {
    const Company = sequelize.define('Company', {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
    },
    {
        underscored: true
    });
    return Company;
}
