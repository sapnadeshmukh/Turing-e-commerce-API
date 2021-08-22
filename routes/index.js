const express=require("express")
const router=express.Router()

router.use('/departments',require('./get_departmentRoute'))
router.use('/departmentByid',require('./departmentByID_route'))
router.use('/categories',require('./categoriesRoute')) 
router.use('/categoryByid',require('./categoryByIdRoute'))
// router.use('/getsingleuser',require('./singleget.route'))
module.exports=router