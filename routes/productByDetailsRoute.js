const express=require("express")
const router=express.Router()
const productByDetails_controller=require('../controllers/productByDetails')

router.get('/:product_id',productByDetails_controller.productByDetails)
module.exports=router