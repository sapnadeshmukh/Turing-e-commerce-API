const knex=require('../database/connection')



module.exports.attributes_by_id=(req,res)=>{
    

    knex()
    .select("*")
    .from("attribute")
    .where(" attribute_id" , req.params.attribute_id)
    .then((data) => {
      console.log(data)
      res.send(data)
    })
    .catch((err) => {
      console.log(err)
      res.send(err)
    })

    
}

