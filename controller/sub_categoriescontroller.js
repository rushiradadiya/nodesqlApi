const Sub_Categories=require('.././schema/sub_categoriesSchema');

    exports.addCategories = (req, res) => {
    debugger;
        Sub_Categories.create(req.body)
        .then((result) =>{
            if(result) {
                res.status(200).send({result});
            }
            else
            {
                res.status(404).send("data not found")
            }
        }).catch((err)=>{
        res.status(400).send(err +" Table Not Created")
    })
};


exports.getCategories= (req,res) => {
    debugger;
    Sub_Categories.findAll({ where: {isActive:false}})
        .then((result) => {
            if(!result){
                res.status(404).send({result});
            }else {
                res.status(200).send({result})
            }
        }).catch((err) => {
        res.send(err)
    })
}

exports.update = (req, res) => {
    const id = req.params.categoriesId;

    Sub_Categories.findOne({where:{id: id}}).then((result) => {
        if(!result) {
            res.status(404).send({message: ' Data not Exist'});
        } else {
            Categories.update({name: req.body.name,cid:req.body.cid},
                {where: {id: req.params.categoriesId}}
            ).then(() => {
                res.status(200).send("updated successfully a categories with id = " + id);
            });
        }
    }).catch((err)=>{
        res.status(404).send(err);
    })
};
exports.deletedata = (req, res) => {

    Sub_Categories.findOne({where:{id: req.params.categoriesId}}).then((result) => {
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
                result.update({isActive: true}, {where: {id: req.params.categoriesId}}
                ).then(() => {
                    res.status(200).send("deleted successfully a categories with id = " + JSON.stringify(result));
                });
            }
        }
    }).catch((err)=>{
        res.status(404).send(err);
    })


};
exports.findById = (req, res) => {
    Sub_Categories.findOne({where:{id: req.params.categoriesId,isActive:false}}).then((result) => {
        if(!result){
            res.status(404).send("Data not found");
        }
        else {
            res.status(200).send(result);
        }
    })
};
exports.findByCatId = (req, res) => {
    Sub_Categories.findAll({where:{cid: req.params.categoriesId,isActive:false}}).then((result) => {
        if(!result){
            res.status(404).send({result});
        }
        else {
            res.status(200).send(result);
        }
    })
};
