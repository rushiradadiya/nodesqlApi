const Product=require('../schema/productSchema');
let UPLOAD_PATH = 'public/ProductImages';

exports.uploadProduct = (req, res) => {
    console.log("enter in post-------------",{req})
    const {body:{name,cid,scid,image,price,qty,detail}} = req;

    if(res) {
        let product= {
            name,
            cid,
            scid,
            image: req.file && (UPLOAD_PATH+'/'+req.file.filename),
            price,
            qty,
            detail
        };

        product.create(newProduct)
            .then(() => res.send({newProduct}))
            .catch((error) => {
                console.log(error)
                return res.status(500).send(error)
            });
    }
};

    exports.addProduct = (req, res) => {
    debugger;
    Product.create(req.body)
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




exports.getProduct= (req,res) => {
    debugger;
    Product.findAll({ where: {isActive:false}})
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
    const id = req.params.ProductId;

    Product.findOne({where:{id: id}}).then((result) => {
        if(!result) {
            res.status(404).send({message: ' Data not Exist'});
        } else {
            Product.update({name: req.body.name,cid:req.body.cid,s_c_id:req.body.s_c_id,price:req.body.prize,qty:req.body.qty,image:req.body.image,detail:req.body.detail},
                {where: {id: req.params.productId}}
            ).then(() => {
                res.status(200).send("updated successfully a Product with id = " + id);
            });
        }
    }).catch((err)=>{
        res.status(404).send(err);
    })
};
exports.deletedata = (req, res) => {

    Product.findOne({where:{id: req.params.productId}}).then((result) => {
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
                result.update({isActive: true}, {where: {id: req.params.productId}}
                ).then(() => {
                    res.status(200).send("deleted successfully a Product with id = " + JSON.stringify(result));
                });
            }
        }
    }).catch((err)=>{
        res.status(404).send(err);
    })


};
exports.findById = (req, res) => {
    Product.findOne({where:{id: req.params.productId,isActive:false}}).then((result) => {
        if(!result){
            res.status(404).send("Data not found");
        }
        else {
            res.status(200).send(result);
        }
    })
};

