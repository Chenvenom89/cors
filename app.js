const express  = require('express')
const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser")
const cors = require('cors')
const app = express ()


app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())



const adminsRouter = require('./routers/adminsrouter')
app.use("/api/adminstrators",adminsRouter)

app.get("api/adminstrators",async(req,res)=>{
    const adminstrators = await getAllAdmins()
    res.json(adminstrators)
})

const companiesRouter = require('./routers/companiesrouter')
app.use("/api/airline_companies",companiesRouter)

const customersRouter = require('./routers/customersrouter')
app.use("/api/customers",customersRouter)

const flightsRouter = require('./routers/flightsrouter')
app.use("/api/flights",flightsRouter)

const countriesRouter = require('./routers/countriesrouter')
app.use("/api/countries",countriesRouter)

const ticketRouter = require("./routers/ticketsrouter")
const { getAllAdmins } = require('./model/adminsDB')
app.use("/api/tickets",ticketRouter)



app.listen(4000,()=>{
    console.log("server is running on port 4000");
})

//bring up react.(port3000)
//const "any table" =  const flights = fetch (localhost:4000/get flights) use "useEffect"
//search for C.O.R.S "npm install CORS"
