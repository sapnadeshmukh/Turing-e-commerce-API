const express=require("express")
const router=express.Router()
const getReview_controller=require('../controllers/productGetReview')

router.get('/:product_id',getReview_controller.getReview)
module.exports=router