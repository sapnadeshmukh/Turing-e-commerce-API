const express=require("express")
const router=express.Router()
const get_products_controller=require('../controllers/product')

router.get('/',get_products_controller.get_products)
module.exports=router