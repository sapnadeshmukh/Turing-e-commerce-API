const knex=require('../database/connection')



module.exports.get_categories=async(req,res)=>{
    

        knex.select ('*').from ('category')
        .then((data) =>{
            console.log(data);
            res.send({"data":data})

        }).catch((err) =>{
            console.log(err);
            res.json({"message":err})

        })
    
}

