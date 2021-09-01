const express=require("express")
const router=express.Router()
const shoppingcartsaveforlater_controller=require('../controllers/shoppingcartSaveforlater')

router.get('/:item_id',shoppingcartsaveforlater_controller.shoppingcartSaveforlater)
module.exports=router