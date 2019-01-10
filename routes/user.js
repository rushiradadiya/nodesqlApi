var express = require('express');
var router = express.Router();
const user=require('../controller/user')


router.post('/user',user.addUser);
router.get('/user',user.getUser)
router.get('/user/:userId', user.findById);
router.put('/user/:userId',user.update)
router.delete('/user/:userId', user.delete);
module.exports = router;

/*

router.put('/changePassword', verifyToken, (req, res) => {
    const id = req.decoded.user_id
    changePassword(id, req.body.oldPassword, req.body.password, (err, result) => {
        if(err){
            res.statusCode = 200
            res.json({success: 0, error: err})
        }else{
            res.statusCode = 200
            res.json({success: 1, response: result})
        }
    })
})
 */