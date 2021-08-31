const knex=require('../database/connection')

module.exports.shippingcartBycartID=async(req,res)=>{

    let cart_id = req.params.cart_id;
    knex
    .select(
        'item_id',
        'name',
        'attributes',
        'shopping_cart.product_id',
        'price',
        'quantity',
        'image'
    )
    .from('shopping_cart')
    .join('product', function(){
        this.on('shopping_cart.product_id', 'product.product_id')
    })
    .where('shopping_cart.cart_id', cart_id)
    .then((data) =>{
        let result = []
        for (var i of data){
            let subtotal = i.price*i.quantity;
            i.subtotal = subtotal;
            result.push(i);
        }
        console.log(result);
        res.send(result);
    }).catch(err=> console.log(err));

}