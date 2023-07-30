const express = require("express")
const router = express.Router()



const {
    updateFlight,
    removeFlight,
    addFlight,
    getFlightById,
    getAllFlights
} = require("../controllers/flightscontroller")

router.get("/getFlightById/:id",getFlightById)
router.get("/getAllFlights", getAllFlights)
router.put("/updateFlight",updateFlight)
router.post("/addFlight",addFlight)
router.delete("/removeFlight/:id",removeFlight)



module.exports = router