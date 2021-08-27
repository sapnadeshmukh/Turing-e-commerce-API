const knex=require('../database/connection')
const {authenticateToken}=require('../middleware/createToken')



module.exports.updateCustomer=(res,req)=>{

    var token = res.headers.cookie
    var TOKEN=token.split(';')
    console.log(TOKEN[0]);
        
        if(token!=undefined){
            console.log("saaaaaa")
            const data=authenticateToken(TOKEN[0],process.env.SECRETKEY)


            console.log(data);
                 var token_data = res.body;
                 console.log(token_data)
                var customer_id = res.params.customer_id

                console.log(customer_id)
                knex('customer')
                .update({
                    'name': token_data.name,
                    'email': token_data.email,
                    'password': token_data.password,
                    'day_phone': token_data.day_phone,
                    'eve_phone': token_data.eve_phone,
                    'mob_phone': token_data.mob_phone
                }).where('customer_id', customer_id)
                .then((data) =>{
                    console.log("Updated Successfully!!")
                    req.send({"Done": "data updated successfully!"})
                }).catch((err) =>{
                    req.send({'Msg': 'err check your data'})
                })
        }
}