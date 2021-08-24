const express=require("express")
const router=express.Router()
const attributesByValue_controller=require('../controllers/attributesByvalue')

router.get('/',attributesByValue_controller.attribute_by_value)
module.exports=router