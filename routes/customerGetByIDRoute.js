const express=require("express")
const router=express.Router()
const customerBYidcontroller=require('../controllers/customerGetByID')

router.get('/:customer_id',customerBYidcontroller.customerBYID)
module.exports=router