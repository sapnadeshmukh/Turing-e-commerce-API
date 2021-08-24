const knex=require('../database/connection')

// get all products

module.exports.get_productsByCategoryID=(req,res)=>{
    let category_id = req.params.category_id;
    knex
    .select(
       'product.product_id',
       'name',
       'description',
       'price',
       'discounted_price',
       'thumbnail'
    )
    .from('product')
    .join('product_category',function(){
        this.on('product.product_id', 'product_category.product_id')
    })
    .where('product.product_id', category_id)
    .then((data) =>{
        console.log(data)
        res.send(data);
    }).catch((err) =>{
        console.log(err);
    })
    
}

