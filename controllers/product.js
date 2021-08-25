const knex=require('../database/connection')

// get all products

module.exports.get_products=async(req,res)=>{
    

      
        knex()
        .select("*")
        .from("product")
        .then((data) => {
        var wholeData = {
            count: data.length,
            rows: data
        }
        console.log(wholeData)

        res.send(wholeData)
        })
        .catch((err) => {
        console.log(err)
        res.send(err)
        })

    
}

