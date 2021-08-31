const knex=require('../database/connection')


module.exports.taxByID=async(req,res)=>{
    let tax_id = req.params.tax_id;
    knex
    .select('*')
    .from('tax')
    .where('tax_id', tax_id)
    .then((data) =>{
        console.log(data)
        res.send(data);
    }).catch((err) =>{
        console.log(err);
    })
}