const express=require("express")
const router=express.Router()
const orderInCustomer_controller=require('../controllers/orderIncustomer')

router.get('/:customer_id',orderInCustomer_controller.orderIncustomer)
module.exports=router