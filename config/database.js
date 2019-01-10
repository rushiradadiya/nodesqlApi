const Sequelize = require('sequelize');

exports.url = 'mysql://root:root@localhost:3306/shopping'

exports.db = new Sequelize('shopping','root','root',{
    host: '127.0.0.1',
    port: 8889,
    dialect: 'mysql',
    dialectOptions: {
        socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
        multipleStatements: true
    },
});

