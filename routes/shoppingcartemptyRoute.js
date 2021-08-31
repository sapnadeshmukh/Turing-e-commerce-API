const express=require("express")
const router=express.Router()
const shoppingcartEmpty_controller=require('../controllers/shoppingCartEmpty')

router.delete('/:cart_id',shoppingcartEmpty_controller.shippingcartempty)
module.exports=router