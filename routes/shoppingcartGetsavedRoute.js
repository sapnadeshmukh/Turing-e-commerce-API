const express=require("express")
const router=express.Router()
const shoppingcartGetsaved_controller=require('../controllers/shoppingcartGetsaved')

router.get('/:cart_id',shoppingcartGetsaved_controller.shoppingcartgetSaved)
module.exports=router