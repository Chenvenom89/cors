const ticketsDBfunctions = require ("../model/ticketsDB")


const getTicketById = async (req, res) => {
    try {
      const ticketId = req.params.id;
      const result = await ticketsDBfunctions.getTicketById(id)
      res.esnd (result)
    } catch (err) {
      res.status(500).send( err);
    }
  }

  const getAllTickets = async (req, res) => {
    try {
      const result = await ticketsDBfunctions.getAllTickets()
      res.json(result);
    } catch (err) {
      res.status(500).send("Error in the database: " + err);
    }
  }

 const addTicket = async (req, res) => {
    try {
      const newTicket = req.body;
      const result  = await ticketsDBfunctions.addTicket(newTicket)
      res.send(result)
    } catch (err) {
      res.status(500).send(err);
    }
  }
  const deletTicket = async (req,res)=>{
      try{
          const id = id.params.id
          const result = await ticketsDBfunctions.deletTicket(id)
          res.json(result)
      }catch(err){
          res.status(500).send(err)
      }
  }

  const updateTicket = async(req,res)=>{
      try{
          const rowsUpadeted = req.body
          const result = await ticketsDBfunctions.updateTicket(rowsUpadeted)
          res.json(result)
      }catch(err){
          res.status(500).send(err)
      }
  }
  module.exports={
    updateTicket,
    deletTicket,
    addTicket,
    getTicketById,
    getAllTickets
  }