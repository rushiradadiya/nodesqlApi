var express = require('express');
var router = express.Router();
const product=require('../controller/productcontroller')
const upload = require('../config/multer');
let UPLOAD_PATH = 'public/ProductImages';

debugger;
router.post('/', upload(UPLOAD_PATH).single('image'),product.uploadProduct);
router.get('/',product.getProduct)
router.get('/:productId', product.findById);
router.put('/:productId',product.update)
router.delete('/:productId', product.deletedata);
module.exports = router;

