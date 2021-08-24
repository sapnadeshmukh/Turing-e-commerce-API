const express=require("express")
const router=express.Router()
const productByCategoryID_controller=require('../controllers/productByCategoryID')

router.get('/:category_id',productByCategoryID_controller.get_productsByCategoryID)
module.exports=router