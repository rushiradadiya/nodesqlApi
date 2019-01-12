var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser=require('body-parser')
var usersRouter = require('./routes/user');
var catRouter = require('./routes/categories')
var subcatRouter = require('./routes/sub_categories')
var app = express();
const {db} = require('./config/database');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', usersRouter);
app.use('/categ',catRouter);
app.use('/subcat',subcatRouter);

app.listen(4000, (err, res) => {
    if(err){
        console.log("Error occurred "+err.toString());
    } else {
        console.log("Server is listening on port 4000")
    }
});
module.exports = app;
