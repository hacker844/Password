const mongoose = require("mongoose")

const PasswordSchema = mongoose.Schema({
    username:{
        type:String,
        require:[true,"Username is Required"]
    },
    password:{
        type:String,
        require:[true,"Password is Required"]
    }
})
const Password = new mongoose.model("Password",PasswordSchema)
module.exports = Password