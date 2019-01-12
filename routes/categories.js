var express = require('express');
var router = express.Router();
const cat=require('../controller/categoriescontroller')

debugger;
router.post('/',cat.addCategories);
router.get('/',cat.getCategories)
router.get('/:categoriesId', cat.findById);
router.put('/:categoriesId',cat.update)
router.delete('/:categoriesId', cat.deletedata);
module.exports = router;
