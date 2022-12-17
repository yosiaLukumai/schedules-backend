const app = require("express")()
const express = require("express")
require('dotenv').config()
const cors = require('cors')
const panelRoutes = require("./routes/routes")
const roomsRoutes = require("./routes/rooms")
const dbConfig = require("./db/connect")

app.use(cors())
// setting the json response
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dbConfig.connectDb()

// testing routes 
app.get("/test", (req, res)=> {
    return res.send('happy testing')
})
// setting the routes
panelRoutes.panelRoutes(app)
roomsRoutes.roomRoutes(app)

app.listen(4300, ()=> {
    console.log(`app instance on port ${process.env.PORT}`)
})