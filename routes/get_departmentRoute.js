const express=require("express")
const router=express.Router()
const get_department_controller=require('../controllers/departments')

router.get('/',get_department_controller.get_department)
module.exports=router