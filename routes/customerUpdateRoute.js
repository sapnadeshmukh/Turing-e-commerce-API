const express=require("express")
const router=express.Router()
const customerUpdatecontroller=require('../controllers/customerUpdate')

router.put('/:customer_id',customerUpdatecontroller.updateCustomer)
module.exports=router