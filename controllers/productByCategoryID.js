const knex=require('../database/connection')

// get all products

module.exports.get_productsByCategoryID=(req,res)=>{
    
    knex("product")
    .select("product.product_id","name","description","price","discounted_price","thumbnail")
    .join("product_category" , "product.product_id" , "product_category.product_id")
    // .where("product.product_id",req.params.category_id)
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
    })
    .catch((err) => {
      console.log(err)
      res.send(err)
    })
}

