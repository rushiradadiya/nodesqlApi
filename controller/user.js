const User=require('.././schema/userSchema');

exports.addUser = (req, res) => {
    User.create(req.body)
        .then((result) =>{
            res.status(200).send({result});
        }).catch((err)=>{
        res.status(400).send(err +" Table Not Created");
    })
};


exports.getUser = (req,res) => {
    User.findAll({ where: {isActive:false}})
        .then((result) => {
            res.status(200).send({result});
        }).catch((err) => {
        res.status(400).send(err+"Data not exits");
    })
}

exports.update = (req, res) => {
    const id = req.params.userId;

    User.findOne({where:{id: id}}).then((result) => {
        if(!result) {
            res.status(404).send({message: ' Data not Exist'});
        } else {
            User.update({email: req.body.email, password: req.body.password},
                {where: {id: req.params.userId}}
            ).then(() => {
                res.status(200).send("updated successfully a customer with id = " + id);
            });
        }
    }).catch((err)=>{
        res.status(404).send(err);
    })
};
exports.deletedata = (req, res) => {

    User.findOne({where:{id: req.params.userId}}).then((result) => {
        if(!result) {
            res.status(404).send({message: ' Data not Exist'});
        }
        else
        {
            if(result.isActive === true)
            {
                res.status(404).send("data not found = " + result);
            }
            else
            {
                result.update({isActive: true}, {where: {id: req.params.userId}}
                ).then(() => {
                    res.status(200).send("deleted successfully a customer with id = " + JSON.stringify(result));
                });
            }
        }
    }).catch((err)=>{
        res.status(404).send(err);
    })


};
exports.findById = (req, res) => {
    User.findOne({where:{id: req.params.userId,isActive:false}}).then((result) => {
        if(!result){
            res.status(404).send("Data not found");
        }
        else {
            res.status(200).send(result);
        }
    })
};


//Login Here
exports.signIn = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({where:{email: email,password:password}}).then((result) => {
        if(result) {
            console.log(result)
            res.status(200).send(result);
        } else {
            console.log("data not exits")
            res.send("data not exits");
        }
    }).catch((err)=>{

    })
};