const mongoose = require("mongoose");
const {Schema} = mongoose;
const User = require("./user.js");
const bookingSchema = new mongoose.Schema({
    listingName:{
        type:String,
    },
    checkInDate:{
        type:Date,
        required:true,
    },
    checkOutDate:{
        type:Date,
        required:true,
    }
})

module.exports = mongoose.model("Booking",bookingSchema);