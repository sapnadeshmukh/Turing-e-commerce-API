const knex=require('../database/connection')



module.exports.attribute_by_value=(req,res)=>{

    
    var attribute_id = req.params.attribute_value_id 
    knex('attribute')
      .select('attribute_value.attribute_value_id', 'value')
      .join("attribute_value" , "attribute.attribute_id", "attribute_value.attribute_id")
    //   .where('attribute_value.attribute_value_id', attribute_id)
      .then((data) => {
        console.log(data)
        res.send(data)
      })
      .catch((err) => {
        console.log(err)
        res.send(err)
      })

    
}
    

