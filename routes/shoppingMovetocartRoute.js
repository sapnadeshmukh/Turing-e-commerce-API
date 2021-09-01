const express=require("express")
const router=express.Router()
const shoppingcartMovetoCart_controller=require('../controllers/shoppingcartMoveTocart')

router.get('/:item_id',shoppingcartMovetoCart_controller.shoppingcartMoveToCart)
module.exports=router