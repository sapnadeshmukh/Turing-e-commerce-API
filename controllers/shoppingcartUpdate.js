const knex=require('../database/connection')

module.exports.shippingcartupdate=async(req,res)=>{
    let item_id = req.params.item_id;
    let quantity = req.body.quantity;
    knex('shopping_cart')
    .where('shopping_cart.item_id', item_id)
    .update({
        'quantity': req.body.quantity
    })
    .then(() =>{
        knex
        .select(
            'item_id',
            'product.name',
            'shopping_cart.attributes',
            'shopping_cart.product_id',
            'product.price',
            'shopping_cart.quantity',
            'product.image'
        )
        .from('shopping_cart')
        .where('shopping_cart.item_id', item_id)
        .join('product', function() {
            this.on('shopping_cart.product_id', 'product.product_id')
        })
        .then((data) =>{
            let result = [];
            for (let i of data){
                let subtotal = i.price * i.quantity;
                i.subtotal = subtotal;
                result.push(i);
            }
            console.log({"Great": "data updated!"});
            res.send(result);
        }).catch(err => console.log(err));
    }).catch((err) =>{
        console.log(err)
    })
}