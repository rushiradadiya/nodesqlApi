const Sequelize = require('sequelize');
const {db} = require('../config/database');

const User = db.define('user',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        // allowNull: false
    },
    gender: {
        type: Sequelize.STRING,
       // allowNull: false
    },
    age: {
        type: Sequelize.STRING,
       // allowNull: false
    },
    phone: {
        type: Sequelize.INTEGER,
        //allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    type: {
        type: Sequelize.BOOLEAN,
        defaultValue:false
    },
    isActive: {
      ç
    },
    created_by: {
        type: Sequelize.STRING,
      //  allowNull: false
    },
    updated_by: {
        type: Sequelize.STRING,
       // allowNull: false
    },
    deletedAt: {
        type: Sequelize.STRING,
       // allowNull: false
        
    },
    deleted_by: {
        type: Sequelize.STRING,
       // allowNull: false
       
    },
   
});

User.sync({force: false}).then((res) => {
    console.log('User Table Created Successfully');
}).catch((err) => {

    console.log('Error While Creating User Table');
})

module.exports = User;