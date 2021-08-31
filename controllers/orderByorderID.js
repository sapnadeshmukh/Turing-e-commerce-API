const knex=require('../database/connection')
const {authenticateToken}= require('../middleware/createToken');




module.exports.orderByID=(req,res)=>{
    var token = req.headers.cookie;
    console.log(token)
    var TOKEN=token.split(';')
    console.log(TOKEN[0]);
    let customer_id=req.params.customer_id

    console.log(customer_id)

        if(token!=undefined){
            var order_id = req.params.order_id
        knex
        .select(
            'orders.order_id',
            'product.product_id',
            'order_detail.attributes',
            'product.name as product_name',
            'order_detail.quantity',
            'product.price',
            'order_detail.unit_cost'
        )
        .from('orders')
        .join('order_detail', function() {
            this.on('orders.order_id','order_detail.order_id')
        })
        .join('product', function() {
            this.on('order_detail.product_id','product.product_id')
        })
        .where('orders.order_id',order_id)
        .then((data) =>{
            var orders_data = [];
            for (let i of data){
                let subtotal = i.price * i.quantity;
                i.subtotal = subtotal;
                orders_data.push(i)
            }
            console.log(orders_data);
            res.send(orders_data);
        }).catch((err) =>{
            console.log(err);
        })

        }
        
}