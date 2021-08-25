const express=require("express")
const router=express.Router()
const attributesByValue_controller=require('../controllers/attributesByvalue')

router.get('/:attribute_value_id',attributesByValue_controller.attribute_by_value)
module.exports=router