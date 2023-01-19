const Sequelize = require('sequelize');
const db = require('../config/dbConnect');

const Filme = db.define('filme', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imagem : {
        type: Sequelize.STRING,
        allowNull: false
    },
    diretor: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    paranoid: true,
    deletedAt: 'destroyTime'
});

module.exports = Filme;