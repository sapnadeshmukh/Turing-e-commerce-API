const knex=require('../database/connection')

module.exports.productByLocation=(req,res)=>{

    let product_id = req.params.product_id;
    knex
    .select(
        'category.category_id',
        'category.name as category_name',
        'category.department_id',
        'department.name as department_name'
    )
    .from('product')
    .join('product_category', function(){
        this.on('product.product_id', 'product_category.product_id')
    })
    .join('category', function(){
        this.on('product_category.category_id', 'category.category_id')
    })
    .join('department', function(){
        this.on('category.department_id', 'department.department_id')
    })
    .where('product.product_id', product_id)
    .then((data) =>{
        res.send(data);
    }).catch((err) =>{
        console.log(err);
    })

}