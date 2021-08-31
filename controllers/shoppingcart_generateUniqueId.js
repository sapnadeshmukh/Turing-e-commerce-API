const knex=require('../database/connection')
const random = require('randomstring');




module.exports.shoppingcardGenID=async(req,res)=>{
    
    const cart_id = random.generate()
    console.log(cart_id)
    res.send(`this is your cart_id :${cart_id}`)

}