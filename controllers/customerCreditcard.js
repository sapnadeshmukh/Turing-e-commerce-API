const knex=require("../database/connection")
const {authenticateToken}=require('../middleware/createToken')



module.exports.customerCreditcard=(req,res)=>{

    var token = req.headers.cookie;
    var TOKEN=token.split(';')
    console.log(TOKEN[0]);
    if(token!=undefined){

        const data=authenticateToken(TOKEN[0],process.env.SECRETKEY)
        console.log(data)
        var token_data = req.body;
        console.log(token_data)         
         var customer_id = req.params.customer_id
            console.log(customer_id)

            knex('customer')
            .update({
                'credit_card': token_data.credit_card
            }).where('customer_id', customer_id)
            .then((data) =>{
                console.log("DATA UPDATED")
                res.send({"Done": "data updated successfully!"})
            }).catch((err) =>{
                res.send({"Msg": "err check your data in your database."})
            })
        
    }
}