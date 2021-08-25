const knex=require('../database/connection')

// get all products By search

module.exports.get_productsBySearch=(req,res)=>{

    knex("product")
    .select("product.product_id","name","description","price","discounted_price","thumbnail")
    .where('product.name',req.params.search)
    .then((data) => {
      for (var i=0; i<data.length; i++){
        if (data[i]["name"] === data[i]["name"]){
          var wholeData = {
            count: data[i]["name"].length,
            rows: data
          }
        }
      }
      console.log(wholeData)

      res.send(wholeData)
    }).catch((err) => {
      console.log(err)
      res.send(err)
    })

    
}
    