const knex=require('../database/connection')



module.exports.get_department_by_id=async(req,res)=>{
    

    knex()
    .select("*")
    .from("department")
    .where("department_id" , req.params.department_id)
    .then((data) => {
      console.log(data)
      res.send(data)
    })
    .catch((err) => {
      console.log(err)
      res.send(err)
    })

    
}

