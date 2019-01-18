const Sequelize = require('sequelize');
const {db} = require('../config/database');
const Category = require('../schema/categoriesSchema');
const Sub_Category = require('../schema/sub_categoriesSchema');

const Product = db.define('Product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cid: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    scid: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    image:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    qty: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    detail:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    isactive: {
        type: Sequelize.BOOLEAN,
        defaultValue:false
    },
    created_by: {
        type: Sequelize.STRING,
      //  allowNull: false
    },
    updated_by: {
        type: Sequelize.INTEGER,
        //allowNull: false
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

Product.belongsTo(Category, {foreignKey: 'cid'});
Product.belongsTo(Sub_Category, {foreignKey: 'scid'});
Product.sync({ force: false }).then((res) => {
 console.log('Product Table Create Succesfully');
}).catch((err) => {
console.log('Error in creating Table', err);
})
module.exports = Product;
