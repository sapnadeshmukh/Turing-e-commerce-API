const knex=require('../database/connection')



module.exports.get_department=async(req,res)=>{
    

        knex.select ('*').from ('department')
        .then((data) =>{
            console.log(data);
            res.send({"data":data})

        }).catch((err) =>{
            console.log(err);
            res.json({"message":err})

        })
    
}

