const mongoose = require("mongoose")
async function getConnection() {
    try {
        await mongoose.connect("mongodb+srv://prateekanojia20024:xZXfzZmS64IEgQje@password.cfhm01p.mongodb.net/Password")
        console.log("Database is Connected")
    }
    catch (error) {
        console.log(error)
    }
}
getConnection()

