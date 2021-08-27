const express=require("express")
const router=express.Router()
const customerRegister_controller=require('../controllers/customerRegister')

router.post('/',customerRegister_controller.customerRegister)
module.exports=router