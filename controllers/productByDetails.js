const knex=require('../database/connection')



module.exports.productByDetails=async(req,res)=>{

    let product_id = req.params.product_id;
    knex
    .select(
        'product_id',
        'name',
        'description',
        'price',
        'discounted_price',
        'image',
        'image_2'
    )
    .from('product')
    .where('product.product_id',product_id)
    .then((data) =>{
        res.send(data);
    }).catch((err) =>{
        console.log(err);
    })

  
        
    
}

