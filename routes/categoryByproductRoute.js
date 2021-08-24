const express=require("express")
const router=express.Router()
const category_By_Product_controller=require('../controllers/categoryByproduct')

router.get('/:product_id',category_By_Product_controller.category_by_product)
module.exports=router