const knex=require('../database/connection')



module.exports.category_by_id=async(req,res)=>{
    

    knex()
    .select("*")
    .from("category")
    .where(" category_id" , req.params.category_id)
    .then((data) => {
      console.log(data)
      res.send(data)
    })
    .catch((err) => {
      console.log(err)
      res.send(err)
    })

    
}

