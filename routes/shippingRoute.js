const express=require("express")
const router=express.Router()
const shipping_controller=require('../controllers/shipping')

router.get('/',shipping_controller.shipping)
module.exports=router