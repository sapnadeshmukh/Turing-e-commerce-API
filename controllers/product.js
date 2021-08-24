const knex=require('../database/connection')

// get all products

module.exports.get_products=async(req,res)=>{
    

        knex.select ('*').from ('product')
        .then((data) =>{
            console.log(data);
            res.send({"data":data})

        }).catch((err) =>{
            console.log(err);
            res.json({"message":err})

        })
    
}

