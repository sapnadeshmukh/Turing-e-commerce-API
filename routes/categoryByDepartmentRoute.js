const express=require("express")
const router=express.Router()
const category_By_Department_controller=require('../controllers/categoryBydepartment')

router.get('/:department_id',category_By_Department_controller.category_by_department)
module.exports=router