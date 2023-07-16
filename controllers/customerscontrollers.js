const customerDBfunction = require("../model/customersDB")

 //checked and work on(http://localhost:3000/api/getAllCustomers)
const getAllCustomers = async (req, res) => {
    const result = await customerDBfunction.getAllCustomers()
    res.json(result)
  };


  //checked and worked on (http://localhost:3000/api/getCustomerById/1)
  //GET CUSTOMERS BY ID
const getCustomerById = async(req, res) => {
    const id = req.params.id
    const result = await customerDBfunction.getCustomerById(id)
    res.send(result)
}


//FUNCTION TO ADD A NEW CUSTOMER
const addCustomer = async(req, res) => {
    try{
        const newcustomer = req.body
        const result = await customerDBfunction.addCustomer(newcustomer)
        res.send(result)
    }catch(err)
       {
            res.send(err)
        }
    }
   
 //FUNCTION TO REMOVE A CUSTOMER

const removeCustomer = async(req, res) => {
    try{
        const id = req.body.id
        const result = await customerDBfunction.removeCustomer(id)
        res.json(result)
    }catch(err){
        res.status(500).send(err)
    }
}

  //FUNCTION TO UPDATE THE CUSTOMER TABLES
   //(http://localhost:3000/api/customers/2)
 const updateCustomerTable = async (req, res) => {
    try{
        const updatecustomer = req.body
        const result = await customerDBfunction.updateCustomerTable(updatecustomer)
        res.json(result)
    }catch(err){
        res.status(500).send(err)
    }
   }

module.exports={
    updateCustomerTable,
    removeCustomer,
    addCustomer,
    getCustomerById,
    getAllCustomers
}
   