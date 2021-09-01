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
router.use('/productByDetails',require('./productByDetailsRoute'))
router.use('/productByLocation',require('./productByLocationRoute'))
router.use('/postreview',require('./productPostReviewRoute'))
router.use('/productGetReview',require('./productGetReviewRoute'))


router.use('/customerRegister',require('./customerRegisterRoute'))
router.use('/customerLogin',require('./customerLoginRoute'))
router.use('/customerUpdateAddress',require('./customerUpdateAddressRoute'))
router.use('/customerByid',require('./customerGetByIDRoute'))
router.use('/updateCustomer',require('./customerUpdateRoute'))
router.use('/customerCreditcard',require('./customerCreditcardRoute'))


router.use('/shoppingcard_genId',require('./shoppingcart_generateUniqueIdRoute'))
router.use('/shoppingcartadd',require('./shoppingcartAddRoute'))
router.use('/shoppingcartBycartID',require('./shopppingcartBycartIDRoute'))
router.use('/shoppingcartupdate',require('./shoppingCartUpdateRoute'))
router.use('/shoppingcartempty',require('./shoppingcartemptyRoute'))
router.use('/shoppingcartMoveTocart',require('./shoppingMovetocartRoute'))
router.use('/shoppingcarttotalamount',require('./shoppingcartTotalamoutRoute'))
router.use('/shoppingcartsaveforlater',require('./shoppingcartsaveforlaterRoute'))
router.use('/shoppingcartgetsaved',require('./shoppingcartGetsavedRoute'))
router.use('/shoppingcartremoveproduct',require('./shoppingcartRemoveProductRoute'))









router.use('/alltax',require('./taxRoute'))
router.use('/taxbyID',require('./taxbyIdRoute'))

router.use('/shipping',require('./shippingRoute'))
router.use('/shippingbyID',require('./shippingbyIdRoute'))


router.use('/order',require('./orderRoute'))
router.use('/orderbyid',require('./orderByorderIDRoute'))
router.use('/orderInCustomer',require('./orderIncustomerRoute'))
router.use('/ordershortDetails',require('./ordershortDetailsRoute'))



module.exports=router