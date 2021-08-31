const express=require("express")
const router=express.Router()
const taxAll_controller=require('../controllers/taxAll')

router.get('/',taxAll_controller.allTax)
module.exports=router