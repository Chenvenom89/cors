const express = require("express")
const router = express.Router()




const {
    updateCountriesTable,
    removeCountry,
    addCountry,
    getCountriesById,
    getCountries
} = require("../controllers/countriescontroller")


//countries API
    router.put("/updateCountriesTable",updateCountriesTable)
    router.delete("/removeCountry/:id",removeCountry)   
    router.post("/addCountry",addCountry)
    router.get("/getCountriesById/:id",getCountriesById)
    router.get("/getCountries",getCountries)


    module.exports = router