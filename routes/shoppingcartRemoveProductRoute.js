const express=require("express")
const router=express.Router()
const shoppingcartRemoveProduct_controller=require('../controllers/shoppingcartRemoveproduct')

router.delete('/:item_id',shoppingcartRemoveProduct_controller.shoppingcartRemoveProduct)
module.exports=router