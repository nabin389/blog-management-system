const mongoose = require("mongoose")
// DB Connection
const dbURI = "mongodb+srv://subedinabin389_db_user:HIzOPgzBjJr6qjMH@cluster0.jenzl6h.mongodb.net/"

async function connectToDb(){
    try{
        await mongoose.connect(dbURI)
        console.log("Connected to MangoDB")
    } catch(error){
        console.error("Error connecting to MongoDB:", error)
    }
}
// connectToDb()
module.exports = connectToDb; 

