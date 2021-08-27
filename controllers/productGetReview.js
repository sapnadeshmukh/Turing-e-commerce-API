const knex=require('../database/connection')
const {authenticateToken}= require('../middleware/createToken');


module.exports.getReview=(res,req)=>{

    var token = res.headers.cookie;
    var TOKEN=token.split(';')
    console.log(TOKEN[0]);
    if(token!=undefined){

        const data=authenticateToken(TOKEN[0],process.env.SECRETKEY)
        console.log(data)
        const product_id=res.params.product_id;
        console.log(product_id)


        knex('review')
        .select('product.name',
        'review.review',
        'review.rating',
        'review.created_on'
        ).join('product', function() {
                this.on('review.review_id','product.product_id')
            }).where('rating', product_id)

        
        .then((data) => {
            console.log(data)
            req.send(data)
        })
        .catch((err) => {
            req.send(err)
        })


      
    }
    
}