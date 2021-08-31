const knex=require('../database/connection')
const {authenticateToken}= require('../middleware/createToken');




module.exports.order=(req,res)=>{
    var token = req.headers.cookie;
    console.log(token)
    var TOKEN=token.split(';')
    console.log(TOKEN[0]);
    if(token!=undefined){

        const data=authenticateToken(TOKEN[0],process.env.SECRETKEY)
        console.log(data)
        let customer_id=req.params.customer_id
        console.log(customer_id)

        knex
        .select("*")
        .from("shopping_cart")
        .where("cart_id",req.body.cart_id)
        .join("product",function(){
            this.on('shopping_cart.product_id','product.product_id')
        })
        .then((data)=>{
            knex("orders").insert({
                "total_amount":data[0].quantity*data[0].price,
                "created_on":new Date(),
                "customer_id":customer_id,
                "shipping_id":req.body.shipping_id,
                "tax_id":req.body.tax_id
            })
            .then((result)=>{
                knex("order_detail").insert({
                    "unit_cost":data[0].price,
                    "quantity":data[0].quantity,
                    "product_name":data[0].name,
                    "attributes":data[0].attributes,
                    "product_id":data[0].product_id,
                    "order_id":result[0]
                })
                .then((detail)=>{
                    knex.select("*").from("shopping_cart").where("cart_id",req.body.cart_id).delete()
                    .then(()=>{
                        res.send({"order Id":result[0]})
                    }).catch(()=>{
                        res.send({"error":"error in deleting data"})
                    })
                }).catch(()=>{
                    res.send({"error":"error in insserting data in orders detail."})
                })
            })
        }).catch((err)=>{
            res.send({"error":"cart id not found..."})
        })
        }

}
