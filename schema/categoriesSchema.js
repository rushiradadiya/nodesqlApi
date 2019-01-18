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
    created_by: {
        type: Sequelize.STRING,
        allowNull: false
    },
    updated_by: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    deletedAt: {
        type: Sequelize.STRING,
        allowNull: false
        
    },
    deleted_by: {
        type: Sequelize.STRING,
        allowNull: false
       
    }
});

categories.sync({force: false}).then((res) => {
    console.log('categories Table Created Successfully');
}).catch((err) => {

    console.log('Error While Creating categories Table');
})

module.exports = categories;