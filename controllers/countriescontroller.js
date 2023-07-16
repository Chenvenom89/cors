const countriesDBfunctions = require("../model/countriesDB")

const getCountries = async (req,res)=>{
    try{ const countries = req.body
        const result = await countriesDBfunctions.getCountries(countries)
        res.json(result)
    }catch(err){
        res.status(500).send(err)
    }
}

     const getCountriesById = async(req,res)=>{
    try{
        const id = req.params.id
        const result = await countriesDBfunctions.getCountriesById(id)
        res.json(result)
    }catch(err){
        res.status(500).send(err)
    }
}

const addCountry = async(req,res)=>{
    try{
        const newCountry = req.body
        const result = await countriesDBfunctions.addCountry(newCountry)
        res.json(result)
    }catch(err){
        res.status(500).send(err)
    }
}

const updateCountriesTable = async(req,res)=>{
    try{
        const updatedCountry = req.body
        const result = await countriesDBfunctions.updateCountriesTable(updatedCountry)
        res.json(result)
    }catch(err){
        res.status(500).send(err)
    }
}

const removeCountry = async(req,res)=>{
    try{
        const id = req.params.id
        const result = await countriesDBfunctions.removeCountry(id)
        res.json(result)
        }catch(err){
            res.status(500).send(err)
        }
    }

module.exports = {
    removeCountry,
    updateCountriesTable,
    getCountries,
    addCountry,
    getCountriesById
  }