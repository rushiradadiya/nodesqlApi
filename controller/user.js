const User=require('.././schema/userSchema');

exports.addUser = (req, res) => {
    User.create(req.body)
        .then((data) =>{
            res.send(data);
        }).catch((err)=>{
        res.send(err)
    })
};


exports.getUser = (req,res) => {
    User.findAll()
        .then((data) => {
            res.send(data)
        }).catch((err) => {
        res.send(err)
    })
}

exports.update = (req, res) => {
    const id = req.params.userId;
    User.update( { email: req.body.email, password: req.body.password },
        { where: {id: req.params.userId} }
    ).then(() => {
        res.status(200).send("updated successfully a customer with id = " + id);
    });
};
exports.findById = (req, res) => {
    User.findById(req.params.userId).then(customer => {
        res.send(customer);
    })
};
exports.delete = (req, res) => {
    const id = req.params.userId;
    User.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).send('deleted successfully a customer with id = ' + id);
    });
};