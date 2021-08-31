const express=require("express")
const router=express.Router()
const shoppingcardGenID_controller=require('../controllers/shoppingcart_generateUniqueId')

router.get('/',shoppingcardGenID_controller.shoppingcardGenID)
module.exports=router