const express=require("express")
const router=express.Router()
const departmentBy_ID_controller=require('../controllers/get_departmentByID')

router.get('/:department_id',departmentBy_ID_controller.get_department_by_id)
module.exports=router