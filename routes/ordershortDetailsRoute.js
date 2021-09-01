const express=require("express")
const router=express.Router()
const ordershortDetail_controller=require('../controllers/orderShortDetails')

router.get('/:order_id',ordershortDetail_controller.orderShortDetails)
module.exports=router