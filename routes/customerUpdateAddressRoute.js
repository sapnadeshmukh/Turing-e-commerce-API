const express=require("express")
const router=express.Router()
const customerUpdateAddress_controller=require('../controllers/customerUpdateAddress')

router.put('/:customer_id',customerUpdateAddress_controller.customerUpdateAddress)
module.exports=router