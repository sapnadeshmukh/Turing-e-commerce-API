const knex=require('../database/connection')



module.exports.product_by_id=async(req,res)=>{
    
    let product_id = req.params.product_id;
    knex()
    .select("*")
    .from("product")
    .where(" product_id" , product_id)
    .then((data) => {
      console.log(data)
      res.send(data)
    })
    .catch((err) => {
      console.log(err)
      res.send(err)
    })

    
}

