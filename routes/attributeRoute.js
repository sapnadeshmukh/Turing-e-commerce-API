const express=require("express")
const router=express.Router()
const attributes_controller=require('../controllers/attributes')

router.get('/',attributes_controller.get_attributes)
module.exports=router