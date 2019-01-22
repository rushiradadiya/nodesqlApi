var express = require('express');
var router = express.Router();
const cat=require('../controller/categoriescontroller')

const upload = require('../config/multer');
let UPLOAD_PATH = 'public/categoryImage';


router.post('/', upload(UPLOAD_PATH).single('image'),cat.uploadProduct);
router.get('/',cat.getCategories)
router.get('/:categoriesId', cat.findById);
router.put('/:categoriesId',cat.update)
router.delete('/:categoriesId', cat.deletedata);
module.exports = router;
