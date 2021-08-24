const knex=require('../database/connection')



module.exports.attribute_by_value=(req,res)=>{

    knex
    .select(
        'attribute_value_id',
        'value'
        
    )
    .from('attribute')
    .join('attribute_value', function(){
        this.on('attribute.attribute_id', 'attribute_value.attribute_id')
    })
    .then((data) =>{
        console.log(data)
        res.send(data);
    }).catch((err) =>{
        console.log(err);
    })
    

    
}
    

