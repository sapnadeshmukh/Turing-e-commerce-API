const knex=require('../database/connection')
const {authenticateToken}= require('../middleware/createToken');




module.exports.orderShortDetails=async(req,res)=>{

    var token = req.headers.cookie;
    console.log(token)
    var TOKEN=token.split(';')
    console.log(TOKEN[0]);

    knex
    .select(
        'orders.order_id',
        'orders.total_amount',
        'orders.created_on',
        'orders.shipped_on',
        'orders.status',
        'order_detail.product_name as name'
    )
    .from('orders')
    .join('order_detail', function() {
        this.on('orders.order_id','order_detail.order_id')
    })
    .where('orders.order_id', req.params.order_id)
    .then((data) =>{
        console.log(" Got data!!!");
        res.send(data)
    }).catch((err) =>{
        console.log(err);
    })
}
    