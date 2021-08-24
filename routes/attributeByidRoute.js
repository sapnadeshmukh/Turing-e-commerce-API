const express=require("express")
const router=express.Router()
const attributeByid_controller=require('../controllers/attributeByid')

router.get('/:attribute_id',attributeByid_controller.attributes_by_id)
module.exports=router