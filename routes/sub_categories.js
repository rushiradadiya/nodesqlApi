var express = require('express');
var router = express.Router();
const subcat=require('../controller/sub_categoriescontroller')

const upload = require('../config/multer');
let UPLOAD_PATH = 'public/subCategoryImage';


router.post('/', upload(UPLOAD_PATH).single('image'),product.addCategories);
router.post('/',subcat.addCategories);
router.get('/',subcat.getCategories)
router.get('/:categoriesId', subcat.findById);
router.get('/cat/:categoriesId', subcat.findByCatId);
router.put('/:categoriesId',subcat.update)
router.delete('/:categoriesId', subcat.deletedata);
module.exports = router;

