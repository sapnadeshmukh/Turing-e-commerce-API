const express=require("express")
const router=express.Router()
const categories_controller=require('../controllers/categories')

router.get('/',categories_controller.get_categories)
module.exports=router