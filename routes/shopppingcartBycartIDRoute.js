const express=require("express")
const router=express.Router()
const shoppingcartByCartID_controller=require('../controllers/shoppingcartBycartID')

router.get('/:cart_id',shoppingcartByCartID_controller.shippingcartBycartID)
module.exports=router