const Sequelize = require('sequelize');
const {db} = require('../config/database');
const Category = require('../schema/categoriesSchema');

const sub_categories = db.define('sub_categories',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cid:{
        type: Sequelize.INTEGER,
        allowNull:  false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue:false
    },
    created_by: {
        type: Sequelize.STRING,
        // allowNull: false
    },
    updated_by: {
        type: Sequelize.INTEGER,
        // allowNull: false
    },
    deletedAt: {
        type: Sequelize.STRING,
        // allowNull: false
        
    },
    deleted_by: {
        type: Sequelize.STRING,
       // allowNull: false
        
    }
});
sub_categories.belongsTo(Category, {foreignKey: 'cid'});

sub_categories.sync({force: false}).then((res) => {
    console.log('sub_categories Table Created Successfully');
}).catch((err) => {

    console.log('Error While Creating categories Table');
})
module.exports = sub_categories;


