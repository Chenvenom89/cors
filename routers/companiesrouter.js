//companies router
const express = require("express")
const router = express.Router()
const{
    getAllCompanies,
        updateAirlineCompany,
        removeCompany,
        addAirlineCompany,
        airlineCompById
} = require("../controllers/companiescontroller")


//companies APIS
router.get("/getAllCompanies",getAllCompanies)
router.post("/addAirlineCompany,",addAirlineCompany,)
router.put("/updateAirlineCompany",updateAirlineCompany)
router.delete("/removeCompany/:id",removeCompany)
router.get("/airlineCompById/:id",airlineCompById)



module.exports = router