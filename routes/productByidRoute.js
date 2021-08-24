const express=require("express")
const router=express.Router()
const productByid_controller=require('../controllers/productByid')

router.get('/:product_id',productByid_controller.product_by_id)
module.exports=router