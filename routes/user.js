var express = require('express');
var router = express.Router();
const user=require('../controller/user')


router.post('/user',user.addUser);
router.get('/user',user.getUser)
router.get('/user/:userId', user.findById);
router.put('/user/:userId',user.update)
router.delete('/user/:userId', user.deletedata);
module.exports = router;


