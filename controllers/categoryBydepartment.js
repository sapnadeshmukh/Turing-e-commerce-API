const knex=require('../database/connection')


module.exports.category_by_department=(req,res)=>{
    var department_id = req.params.department_id;
    knex
    .select(
        'category_id',
        'name',
        'description',
        'department_id'
    )
    .from('category')
    .where('department_id', department_id)
    .then((data) =>{
        res.send(data);
    }).catch((err) =>{
        console.log(err);
    })


}
