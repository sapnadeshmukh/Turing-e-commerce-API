const knex=require('../database/connection')

module.exports.shipping=async(req,res)=>{
    knex
        .select('*')
        .from('shipping_region')
        .then((data) =>{
            res.send(data);
        }).catch((err) =>{
            console.log(err);
        })

}