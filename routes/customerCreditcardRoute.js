const express=require("express")
const router=express.Router()
const customerCreditcard_controller=require('../controllers/customerCreditcard')

router.put('/:customer_id',customerCreditcard_controller.customerCreditcard)
module.exports=router