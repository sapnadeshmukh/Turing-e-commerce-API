const knex=require('../database/connection')
const {authenticateToken}= require('../middleware/createToken');





module.exports.orderIncustomer=(req,res)=>{
    var token = req.headers.cookie;
    console.log(token)
    var TOKEN=token.split(';')
    console.log(TOKEN[0]);
    let customer_id=req.params.customer_id
    if(token!=undefined){
        knex
        .select('*')
        .from('orders')
        .where('customer_id',customer_id)
        .then((data) =>{
            console.log(data);
            res.send(data);
        }).catch((err) =>{
            console.log(err);
        })
    }else{
        res.send({"Error": "please! do login"})
    }

    
}