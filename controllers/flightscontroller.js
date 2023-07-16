const flightsDBfunction = require("../model/flightsDB")

 const getAllFlights = async(req,res) => {
     try{
         const result = await flightsDBfunction.getAllFlights()
         res.send(result)
     }catch(err){
         res.status(500).send(err)
     }
 }

const getFlightById = async(req,res)=> {
    const id = req.params.id
    const result = await flightsDBfunction.getFlightById(id)
    res.send(result)
}
const addFlight = async (req,res)=>{
    try{
        const newFlight = req.body
        const result  = await flightsDBfunction.addFlight(newFlight)
        res.send(result)
    }catch(err){
        res.send(err)
    }
}
const updateFlight = async(req,res)=>{
    try{
        const updateFlight = req.body
        const result = await flightsDBfunction.updateFlight(updateFlight)
        res.jason(result)
    }catch(err){
        res.status(500).send(err)
    }
}
const removeFlight = async(req,res)=>{
    try{
        const id = req.params.id
        const result = await flightsDBfunction.removeFlight(id)
        res.jason(result)
    }catch(err){
        res.status(500).send(err)
    }
}
module.exports= {
    updateFlight,
    removeFlight,
    addFlight,
    getFlightById,
    getAllFlights
}