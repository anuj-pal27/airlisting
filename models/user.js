const mongoose = require("mongoose");
const Booking = require("./booking.js");
const Schema=mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");
const userSchema= new Schema({
    email:{
        type:String,
        required:true,
    },
    booking:[{
        type:Schema.Types.ObjectId,
        ref:"Booking",
        default:null,
    },],
})
userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User",userSchema);