const {knex} = require("./connections")

 //checked and worked(http://localhost:3000/api/flights)
const getAllFlights = async () => {
  const result = await knex ("flights").select()
  return result
}
   
   //FUNCTION TO GET FLIGHT BY ID
  //checked and worked(http://localhost:3000/api/flights/1 )
const getFlightById = async (id) => {
  const result = await knex.raw("select *from flights where id = ?",[id])
  return result[0]
    
  }

 //FUNCTION TO ADD FLIGHT

const addFlight = async(flight) => {
  const result = await knex ("flights").insert(flight)
  return result
}


 //FUNCTION TO REMOVE A FLIGHT

const removeFlight = async (id) => {
    const result = await knex ("flights").where({Id:id}).del()
    return result
  
  }
 //FUNCTION TO UPDATE THE FLIGHTS TABLE 

const updateFlight = async(flight) => {
    const affectedRows = await knex("flights").where({Id:flight.id}).update(flight)
    return affectedRows
}
module.exports={
  updateFlight,
  removeFlight,
  addFlight,
  getFlightById,
  getAllFlights
}