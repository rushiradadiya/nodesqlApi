const Sequelize = require('sequelize');
const {db} = require('../config/database');

const categories = db.define('categories',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue:false
    },
});

categories.sync({force: false}).then((res) => {
    console.log('categories Table Created Successfully');
}).catch((err) => {

    console.log('Error While Creating categories Table');
})

module.exports = categories;