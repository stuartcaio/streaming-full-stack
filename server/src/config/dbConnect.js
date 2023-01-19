const Sequelize = require('sequelize');

const sequelize = new Sequelize("filmes", "root", process.env.SENHA, {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(function(){
    console.log('Conexão com o banco de dados feita com sucesso.');
}).catch(function(){
    console.log('Erro: Conexão com o banco de dados não realizada com sucesso.');
});

module.exports = sequelize;