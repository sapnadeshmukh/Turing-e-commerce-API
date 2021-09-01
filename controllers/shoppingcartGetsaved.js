const knex=require('../database/connection')

module.exports.shoppingcartgetSaved=async(req,res)=>{
    let cart_id = req.params.cart_id;
    knex
    .select(
        'item_id',
        'product.name',
        'shopping_cart.attributes',
        'product.price'
    )
    .from('shopping_cart')
    .join('product', function(){
        this.on('shopping_cart.product_id', 'product.product_id')
    })
    .where('shopping_cart.cart_id', cart_id)
    .then((data) =>{
        res.send(data);
    }).catch((err) =>{
        console.log(err);
    })
}