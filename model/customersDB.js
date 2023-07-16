const {knex} = require("./connections")


 //checked and work on(http://localhost:4000/api/getAllCustomers)
const getAllCustomers =async () => {
    const result = await knex("customers").select
    return result
}


  //checked and worked on (http://localhost:3000/api/getCustomerById/1)
  //GET CUSTOMERS BY ID
const getCustomerById =async (id) => {
  const result = await knex.raw('SELECT * FROM customers WHERE id = ?', [customerId])
      return result
  }

//FUNCTION TO ADD A NEW CUSTOMER
const addCustomer =async  (customer) => {
    const result = await knex ("customers").insert(customer)   
  }
 //FUNCTION TO REMOVE A CUSTOMER

const removeCustomer =async (id) => {
  const result = await knex ("customers").where({id:id}).del()
return result
    
  };

  //FUNCTION TO UPDATE THE CUSTOMER TABLES
   //(http://localhost:3000/api/customers/2)
const updateCustomerTable = async(customer) => {
  const affectedRows = await knex("customers").where({Id:customer.id}).update(customer)
  return affectedRows
}
module.exports = {
  getAllCustomers,
  getCustomerById,
  addCustomer,
  updateCustomerTable,
  removeCustomer
}