const knex=require('../database/connection')



module.exports.productBydepartmentsID=async(req,res)=>{


        
    var departments = req.params.department_id
    knex
      .select("product_id","name","description","price","discounted_price","thumbnail")
      .from('product')
      .join("department" , "products.product_id" , "department.department_id")
      .where("department.department_id" , departments)
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

