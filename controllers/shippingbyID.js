const knex=require('../database/connection')




module.exports.shippingbyID=async(req,res)=>{
    let shipping_region_id = req.params.shipping_region_id
    knex.select('*')
    .from('shipping')
    .where('shipping_region_id',shipping_region_id)
    .then((data)=>{
        console.log(data)
        res.send(data)
    }).catch((err)=>{
        console.log('something issue\n',err)
    })
}