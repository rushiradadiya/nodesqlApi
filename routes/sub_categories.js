var express = require('express');
var router = express.Router();
const subcat=require('../controller/sub_categoriescontroller')


router.post('/',subcat.addCategories);
router.get('/',subcat.getCategories)
router.get('/:categoriesId', subcat.findById);
router.put('/:categoriesId',subcat.update)
router.delete('/:categoriesId', subcat.deletedata);
module.exports = router;
