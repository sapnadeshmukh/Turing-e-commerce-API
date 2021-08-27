const knex=require('../database/connection')
const jwt=require('jsonwebtoken')

const {authenticateToken}=require('../middleware/createToken')


module.exports.customerBYID=(res,req)=>{

    var token = res.headers.cookie;
    var TOKEN=token.split(';')
    console.log(TOKEN[0]);
    if(token!=undefined){
        console.log("sapna")
        const data=authenticateToken(TOKEN[0],process.env.SECRETKEY)
        console.log(data)
        var customer_id = res.params.customer_id;
        knex
        .select("*")
        .from('customer')
        .where('customer_id', customer_id)
        .then((data)=>{
            
            delete data[0].password
            console.log(data);
            req.send(data);
        }).catch((err) =>{
            console.log(err)
        })
        }

}