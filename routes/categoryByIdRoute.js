const express=require("express")
const router=express.Router()
const categoriesByID_controller=require('../controllers/categoryByID')

router.get('/:category_id',categoriesByID_controller.category_by_id)
module.exports=router