module.exports = (sequelize, Sequelize) => {
    const Note = sequelize.define('Note', {
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true
        }
    });
    return Note;
}