const express=require("express")
const router=express.Router()
const postReview_controller=require('../controllers/productPostReview')

router.post('/:product_id',postReview_controller.postReview)
module.exports=router