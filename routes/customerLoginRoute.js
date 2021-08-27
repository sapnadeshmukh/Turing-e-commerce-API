const express=require("express")
const router=express.Router()
const customerLogin_controller=require('../controllers/customerLogin')

router.post('/',customerLogin_controller.customerLogin)
module.exports=router