const knex=require('../database/connection')

module.exports.shoppingcartRemoveProduct=async(req,res)=>{
    let item_id = req.params.item_id;
    knex
    .select('*')
    .from('shopping_cart')
    .where('item_id', item_id)
    .delete()
    .then((data) =>{
        console.log("data delete successfully!")
        res.send("data delete successfully!")
    }).catch((err) =>{
        console.log(err);
    })
}