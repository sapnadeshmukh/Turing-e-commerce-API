const express=require("express")
const router=express.Router()
const attributesByProductId_controller=require('../controllers/attributesByproductId')

router.get('/',attributesByProductId_controller.attributsByproductId)
module.exports=router