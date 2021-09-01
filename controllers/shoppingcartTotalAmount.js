const knex=require('../database/connection')

module.exports.shoppingTotalAmount=async(req,res)=>{
    let cart_id = req.params.cart_id;
    knex
    .select(
        'price',
        'quantity'
    )
    .from('shopping_cart')
    .join('product', function(){
        this.on('shopping_cart.product_id', 'product.product_id')
    })
    .where('shopping_cart.cart_id', cart_id)
    .then((data) =>{
        for (let i of data){
            let result = [];
            let total_Amount = i.quantity * i.price;
            i.total_Amount = total_Amount;
            result.push(i);
            res.send(result);
        }
    }).catch((err) =>{
        console.log(err);
    })

}