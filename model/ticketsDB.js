
const router = require("../routers/adminsrouter");
const{knex} = require("./connections")
  


  const getAllTickets = async () => {
    const result = await knex("tickets").select()
    return result
    
  }

 const getTicketById = async (id) => {
    const result = await knex.raw("select * tickets where id = ?",[id])
    return result[0]
}

 //function to ADD a ticket

 const addTicket = async (ticket) => {
   const result = await knex ("tickets").insert(ticket)
   return result 
}

const deletTicket =async (id)=>{
  const result = await knex("ticket").where({Id:id}).del()
  return result
}

 //function to update the TICKETS LIST 
 const updateTicket = async (ticket) => {
   const rowsUpadeted = await knex("tickets").where({Id:ticket.id}).update(ticket)
   return rowsUpadeted
 }
 module.exports ={
  getAllTickets,
  getTicketById,
  addTicket,
  deletTicket,
  updateTicket
 }
  

