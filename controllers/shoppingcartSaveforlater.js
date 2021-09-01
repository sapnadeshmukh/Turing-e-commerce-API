const knex=require('../database/connection')

module.exports.shoppingcartSaveforlater=async(req,res)=>{
    console.log(req.params.item_id)
    knex
    .select('*')
    .from('shopping_cart')
    .where('item_id', req.params.item_id)
    .then((data) =>{
        if (data.length>0){
            knex('later')
            .insert(data[0])
            .then((result) =>{
                knex
                .select('*')
                .from('shopping_cart')
                .where('item_id', req.params.item_id)
                .then((done) =>{
                    res.send({"Good": "data move from shopping_cart to later successfully!"})
                })
            }).catch((err) =>{
                console.log(err);
            })
        }else{
            res.send({"Error": "sorry! this item_id is not available in this table."})
        }
    })
    
}