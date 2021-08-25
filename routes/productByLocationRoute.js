const express=require("express")
const router=express.Router()
const productByLocation_controller=require('../controllers/productByLocation')

router.get('/:product_id',productByLocation_controller.productByLocation)
module.exports=router