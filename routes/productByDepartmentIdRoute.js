const express=require("express")
const router=express.Router()
const productByDepartmentID_controller=require('../controllers/productByDepartmentId')

router.get('/:department_id',productByDepartmentID_controller.productBydepartmentsID)
module.exports=router