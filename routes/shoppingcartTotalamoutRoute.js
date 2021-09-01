const express=require("express")
const router=express.Router()
const shoppingcartTotalamount_controller=require('../controllers/shoppingcartTotalAmount')

router.get('/:cart_id',shoppingcartTotalamount_controller.shoppingTotalAmount)
module.exports=router