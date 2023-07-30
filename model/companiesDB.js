
const {knex} = require("./connections")
  
 //FUNCTION TO ADD AN AIRLINE COMPANY
 const addAirlineCompany = async (company) => {
  const result = await knex("airline_companies").insert(company)
}
//FUNCTION TO REMOVE AN AIRLIINE COMPANY BY ID
 const removeComapny = async(id)=>{
   const result  = await knex("airline_comapnies").where({Id:id}).del()
 }
//FUNCTION TO UPDATEAIRLINE COMAPNY
 const updateAirlineCompany = async (company) => {
  const affectedRows = await knex("airline_companies").where({Id:company.Id}).update(company)
  return affectedRows
}
//get company by ID
const getCompById = async (id) => {
  const result = await knex("airline_companies").where("id",id);
  return result[0];
}
  //function to get all companies
  const getAllCompanies = async () => {
    const result = await knex(`airline_companies`).select()
    return result
  }

  module.exports = {
    addAirlineCompany,
    removeComapny,
    getCompById,
    getAllCompanies,
    updateAirlineCompany
  }