const knex=require('../database/connection')



module.exports.category_by_product=(req,res)=>{

    var product_id = req.params.product_id;
    knex
    .select(
        'category.category_id',
        'department_id',
        'name'
    )
    .from('category')
    .join('product_category', function(){
        this.on('category.category_id', 'product_category.category_id')
    })
    // .where('product_category.product_id', product_id)
    .then((data) =>{
        console.log(data)
        res.send(data);
    }).catch((err) =>{
        console.log(err);
    })
    

    
}
    

