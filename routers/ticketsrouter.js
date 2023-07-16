const express = require("express")
const router = express.Router()

const{
    updateTicket,
    deletTicket,
    addTicket,
    getTicketById,
    getAllTickets
} = require("../controllers/ticketscontroller")


router.get("/ getAllTickets", getAllTickets)
router.get("/getTicketById/:id",getTicketById)
router.post("/ updateTicket", updateTicket)
router.put("/addTicket",addTicket)
router.delete("/deletTicket",deletTicket)




module.exports = router