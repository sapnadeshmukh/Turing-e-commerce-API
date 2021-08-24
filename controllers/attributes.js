const knex=require('../database/connection')



module.exports.get_attributes=async(req,res)=>{
    

        knex.select ('*').from ('attribute')
        .then((data) =>{
            console.log(data);
            res.send({"data":data})

        }).catch((err) =>{
            console.log(err);
            res.json({"message":err})

        })
    
}

