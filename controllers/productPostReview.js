const knex=require('../database/connection')

module.exports.postReview=(res,req) =>{
    const product_id=req.params.product_id;
    knex.select("*").from('customer').where('customer_id',req.token_data.customer_id).then((data)=>{
        knex('review').insert({
            review: req.body.review,
            rating: req.body.rating,
            product_id: product_id,
            created_on: new Date,
            customer_id: data[0].customer_id
        }).then((data)=>{
            res.send({message:"review and rating"})
        }).catch((err)=>{
            res.send(err)
        })
    })
}