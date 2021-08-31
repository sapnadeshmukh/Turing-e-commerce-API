const express=require("express")
const router=express.Router()
const order_controller=require('../controllers/order')

router.post('/:customer_id',order_controller.order)
module.exports=router