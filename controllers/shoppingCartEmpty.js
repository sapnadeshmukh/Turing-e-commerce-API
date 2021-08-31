const knex=require('../database/connection')

module.exports.shippingcartempty=async(req,res)=>{
    let cart_id = req.params.cart_id;
    knex('*')
    .from('shopping_cart')
    .where('shopping_cart.cart_id', cart_id)
    .del()
    .then((data) =>{
        console.log("deleted data!")
        res.send({delete: 'data deleted successfully!!!'})
    }).catch(err => console.log(err));
}