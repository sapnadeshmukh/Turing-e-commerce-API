const express=require("express")
const router=express.Router()
const shoppingcart_Add_controller=require('../controllers/shoppingcartAdd')

router.post('/',shoppingcart_Add_controller.shoppingcartAdd)
module.exports=router