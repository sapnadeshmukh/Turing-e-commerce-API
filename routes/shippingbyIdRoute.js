const express=require("express")
const router=express.Router()
const shippingbyID_controller=require('../controllers/shippingbyID')

router.get('/:shipping_region_id',shippingbyID_controller.shippingbyID)
module.exports=router