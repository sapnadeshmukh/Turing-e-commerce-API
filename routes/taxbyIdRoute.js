const express=require("express")
const router=express.Router()
const taxbyID_controller=require('../controllers/taxbyID')

router.get('/:tax_id',taxbyID_controller.taxByID)
module.exports=router