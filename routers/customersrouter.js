const express = require("express")
const router = express.Router()



const{
    getAllCustomers,
  getCustomerById,
  addCustomer,
  updateCustomerTable,
  removeCustomer
} = require("../controllers/customerscontrollers")


//customers apis
router.get("/getAllCustomers",getAllCustomers)
router.get("/getCustomerById/:id",getCustomerById)
router.put("/updateCustomerTable",updateCustomerTable)
router.delete("/removeCustomer/:id",removeCustomer)
router.post("/addCustomer",addCustomer)



module.exports = router