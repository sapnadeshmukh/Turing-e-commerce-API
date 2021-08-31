const express=require("express")
const router=express.Router()
const shoppingcartUpdate_controller=require('../controllers/shoppingcartUpdate')

router.put('/:item_id',shoppingcartUpdate_controller.shippingcartupdate)
module.exports=router