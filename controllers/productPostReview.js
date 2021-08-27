const knex=require('../database/connection')
const jwtToken = require("../middleware/createToken")
const {authenticateToken}= require('../middleware/createToken');


module.exports.postReview=(res,req) =>{
    
    
    var token = res.headers.cookie;
    var TOKEN=token.split(';')
    console.log(TOKEN[0]);
    if(token!=undefined){

        const data=authenticateToken(TOKEN[0],process.env.SECRETKEY)
        console.log(data)
        var review = res.body.review;

        var rating = res.body.rating;
        // console.log(rating)

        var product_id = res.params.product_id;
        // console.log(product_id)

    

        if (data!=undefined){

            var tokendata = res.body
            console.log(tokendata)
            // var customer_id = req.params.customer_id
            // console.log(customer_id)

            knex
            .select('*')
            .from('customer')
            .where('customer.customer_id', product_id)
            .then((data) =>{
                console.log("data",data);
               knex('review')
               .insert({
                   review: review,
                   rating: rating,
                   product_id: product_id,
                   created_on: new Date,
                   customer_id: data[0].customer_id
               }).then((insert) => {
                   console.log({"insert": "data inserted successfully!"})
                   req.send({"insert": "data inserted successfully!"})
               }).catch((err) =>{
                   console.log(err);
               })
            }).catch((err) =>{
                console.log(err);
            })
        }else{
            console.log({"Error": "Sorry you didn't login, first do login after that you can post review successfully!"})
        }

    }
}