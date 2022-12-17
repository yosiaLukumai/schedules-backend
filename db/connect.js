const mongoose = require("mongoose")
mongoose.set('strictQuery', true)

const connectDb = async () => {
   var connected = await mongoose.connect(process.env.DBURL)
   if (connected) {
    console.log("sucessfully connected to db")
   } else {
    console.log("Failed to connect to database")
   }
}

module.exports = {
    connectDb
}