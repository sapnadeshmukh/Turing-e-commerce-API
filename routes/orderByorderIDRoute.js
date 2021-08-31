const express=require("express")
const router=express.Router()
const orderByID_controller=require('../controllers/orderByorderID')

router.get('/:order_id',orderByID_controller.orderByID)
module.exports=router