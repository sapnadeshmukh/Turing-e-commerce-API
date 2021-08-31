const knex=require('../database/connection')




module.exports.allTax=async(req,res)=>{
    knex
    .select('*')
    .from('tax')
    .then((data) =>{
        console.log(data)
        res.send(data);
    }).catch((err) =>{
        console.log(err);
    })




}