const knex=require('../database/connection')

module.exports.shoppingcartMoveToCart=async(req,res)=>{
    console.log("sapna")
    console.log(req.params.item_id)
    knex
    .select('*')
    .from('later')
    .where('item_id', req.params.item_id)
    .then((data) =>{
        // console.log(data);
        if (data.length>0){
            knex('cart')
            .insert(data[0])
            .then((result) =>{
                knex
                .select('*')
                .from('later')
                .where('item_id', req.params.item_id)
                .delete()
                .then((done) =>{
                    res.send({"Good": "data move from shopping_cart to cart successfully!"})
                })
            }).catch((err) =>{
                console.log(err);
            })

        }else{
            res.send({"Error": "this id is not available in shopping_cart"})
        }
    
    }).catch((err) => {
        console.log(err);
    })

}