const knex=require('../database/connection')




module.exports.shoppingcartAdd=async(req,res)=>{
    var cart_data = {
        'cart_id': req.body.cart_id,
        'product_id': req.body.product_id,
        'attributes': req.body.attributes,
        'quantity': 1,
        'added_on': new Date()
    }
    knex
    .select('quantity')
    .from('shopping_cart')
    .where('shopping_cart.cart_id', cart_data.cart_id)
    .andWhere('shopping_cart.product_id', cart_data.product_id)
    .andWhere('shopping_cart.attributes', cart_data.attributes)
    .then((data) =>{
        if(data.length==0){
            knex('shopping_cart')
            .insert({
                'cart_id': cart_data.cart_id,
                'product_id': cart_data.product_id,
                'attributes': cart_data.attributes,
                'quantity': 1,
                'added_on': new Date() 
            })
            .then(() =>{
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
                .join('product',function(){
                    this.on('shopping_cart.product_id','product.product_id')
                })
                .then(data => {
                    let datas = []
                    for (let i of data){
                        let subtotal = i.price*i.quantity;
                        i.subtotal = subtotal;
                        // console.log(i);
                        datas.push(i);
                    }
                    console.log(datas)
                    res.send(data);
                }).catch(err => console.log(err));
            }).catch((err) => console.log(err))
        }else{
            // quantity increase
            let quantity = data[0].quantity+1;
            knex('shopping_cart')
            .update({quantity: quantity})
            .where('shopping_cart.cart_id', cart_data.cart_id)
            .andWhere('shopping_cart.product_id', cart_data.product_id)
            .andWhere('shopping_cart.attributes', cart_data.attributes)
            .then(() => {
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
                .join('product', function() {
                    this.on('product.product_id', 'shopping_cart.product_id')
                })
                .then(updatedata => {
                    console.log('data updated!')

                    let updated_list = [];
                    for (let i of updatedata){
                        let subtotal = i.price* i.quantity;
                        i.subtotal = subtotal;
                        updated_list.push(i);
                    }
                    // console.log(updated_list)
                    res.send(updated_list);
                })
                .catch(err => console.log(err));
            })
        }
    })
}