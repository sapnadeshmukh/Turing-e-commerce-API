const express=require("express")
const router=express.Router()

router.use('/departments',require('./get_departmentRoute'))
router.use('/departmentByid',require('./departmentByID_route'))
router.use('/categories',require('./categoriesRoute')) 
router.use('/categoryByid',require('./categoryByIdRoute'))
router.use('/categoryByProduct',require('./categoryByproductRoute'))
router.use('/categoryByDepartment',require('./categoryByDepartmentRoute'))
router.use('/attributes',require('./attributeRoute'))
router.use('/attribute',require('./attributeByidRoute'))
router.use('/attributeByValue',require('./attributesByvalueRoute'))
router.use('/attributeByProductID',require('./attributeByProductIdRoute'))
router.use('/products',require('./productsRoute'))
router.use('/productBySearch',require('./producyBySearchRoute'))
router.use('/productByID',require('./productByidRoute'))
router.use('/productByCategoryID',require('./productBycategoryIdRoute'))
router.use('/productByDepartmentID',require('./productByDepartmentIdRoute'))








module.exports=router