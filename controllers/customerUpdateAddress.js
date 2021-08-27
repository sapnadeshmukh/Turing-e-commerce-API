const knex=require('../database/connection')
const jwt=require('jsonwebtoken')
const {authenticateToken}=require('../middleware/createToken')



module.exports.customerUpdateAddress=async(req,res)=>{
    var token = req.headers.cookie;
    var TOKEN=token.split(';')
    console.log(TOKEN[0]);
    if(token!=undefined){

        // console.log(token);
        const data=authenticateToken(TOKEN[0],process.env.SECRETKEY)
        // console.log(data)

        var token_data = req.body
        var customer_id = req.params.customer_id
            // console.log(customer_id);
            knex('customer')
            .update({
                'address_1': token_data.address_1,
                'address_2': token_data.address_2,
                'city': token_data.city,
                'region': token_data.region,
                'postal_code': token_data.postal_code,
                'country': token_data.country,
                'shipping_region_id': token_data.shipping_region_id
            }).where('customer_id', customer_id)
            .then((data) =>{
                console.log("Data Updated!!!")
                res.send({"Done": "data updated successfully!"});
            }).catch((err) =>{
                console.log(err);
                res.send({"Msg": "err check your data in you database."})
            })
        
       
    }


}
