const knex=require('../database/connection')



module.exports.attributsByproductId=(req,res)=>{
    var products = req.params.product_id
    knex("attribute")
      .select("attribute_value.attribute_value_id","name","value")
      .join("attribute_value","attribute.attribute_id",'=',"attribute_value.attribute_id")
      .join("product_attribute","attribute_value.attribute_value_id",'=', "product_attribute.attribute_value_id")
      .where("product_attribute.product_id", products)
      .then((data) => {
        console.log(data)
        res.send(data)
      })
      .catch((err) => {
        console.log(err)
        res.send(err)
      })


   

    
}

