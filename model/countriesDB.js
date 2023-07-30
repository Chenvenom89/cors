const {knex} = require("./connections")

// Function to retrieve all countries 
const getCountries = async() => {
  const result = await knex ("countries").select()
  return result 
}
  //function  to return country by id
  const getCountriesById = async (id) => {
    const result = await knex("countries").where("id", id);
    return result[0];
  };
  
 
 // Function to insert country into a table
const addCountry = async(newCountry) => {
  const result = await knex ("countries").insert(newCountry)
  return(result)
  }

const removeCountry = async(id)=>{
  const result = await knex("countries").where({Id:id}).del()
  return result
}
 //function to update the country table

const updateCountriesTable =async (country) => {
const affectedRows = await knex("countries").where({Id:country.id}).update(country)
return affectedRows
  }

  module.exports={
    updateCountriesTable,
    removeCountry,
    addCountry,
    getCountriesById,
    getCountries
  }