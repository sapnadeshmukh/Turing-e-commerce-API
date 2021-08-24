const express=require("express")
const router=express.Router()
const producyBysearch_controller=require('../controllers/producrBySearch')

router.get('/:search',producyBysearch_controller.get_productsBySearch)
module.exports=router